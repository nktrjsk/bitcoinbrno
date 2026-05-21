export interface CalendarEvent {
  title: string
  start: string
  end?: string
  location?: string
}

const ICS_URL = 'https://calendar.google.com/calendar/ical/58e5c38f2abe589f11b02056e556627582c01eb2e4c982518a070b1403041c3f%40group.calendar.google.com/public/basic.ics'

export default defineEventHandler(async () => {
  const text = await $fetch<string>(ICS_URL, { responseType: 'text' })
  return parseUpcomingEvents(text)
})

function parseUpcomingEvents(ics: string): CalendarEvent[] {
  const unfolded = ics.replace(/\r\n[ \t]/g, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const lines = unfolded.split('\n')

  const events: CalendarEvent[] = []
  let inEvent = false
  let cur: Record<string, string> = {}

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      inEvent = true
      cur = {}
    } else if (line === 'END:VEVENT') {
      inEvent = false
      if (cur.summary && cur.dtstart) {
        events.push({
          title: unescapeICS(cur.summary),
          start: parseICSDate(cur.dtstart),
          end: cur.dtend ? parseICSDate(cur.dtend) : undefined,
          location: cur.location ? unescapeICS(cur.location) : undefined,
        })
      }
    } else if (inEvent) {
      const i = line.indexOf(':')
      if (i < 0) continue
      const key = line.slice(0, i).split(';')[0].toLowerCase()
      const val = line.slice(i + 1)
      cur[key] = val
    }
  }

  const now = new Date()
  return events
    .filter(e => new Date(e.start) >= now && (
  e.location?.toLowerCase().includes('brno') ||
  e.title.toLowerCase().includes('brno')
))
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
}

function parseICSDate(val: string): string {
  if (val.length === 8) {
    return `${val.slice(0, 4)}-${val.slice(4, 6)}-${val.slice(6, 8)}`
  }
  const d = val.slice(0, 8)
  const t = val.slice(9, 15)
  const utc = val.endsWith('Z') ? 'Z' : ''
  return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}T${t.slice(0, 2)}:${t.slice(2, 4)}:${t.slice(4, 6)}${utc}`
}

function unescapeICS(str: string): string {
  return str.replace(/\\n/g, '\n').replace(/\\,/g, ',').replace(/\\;/g, ';').replace(/\\\\/g, '\\')
}
