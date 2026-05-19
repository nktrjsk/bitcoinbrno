<template>
  <div class="pz">

    <!-- NAV -->
    <nav class="pz-nav">
      <div class="pz-wrap pz-nav-inner">
        <a href="#top" class="pz-brand">
          <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
            <defs><clipPath id="pz-bm-bite"><path d="M 32 4 L 60 56 L 4 56 Z" /></clipPath></defs>
            <g clip-path="url(#pz-bm-bite)">
              <path d="M 32 4 L 60 56 L 4 56 Z" fill="var(--pz-accent)" />
              <circle cx="22" cy="40" r="3" fill="var(--pz-card)" opacity="0.85" />
              <circle cx="38" cy="44" r="2.4" fill="var(--pz-card)" opacity="0.85" />
              <circle cx="30" cy="30" r="2.2" fill="var(--pz-card)" opacity="0.85" />
              <circle cx="44" cy="36" r="1.8" fill="var(--pz-card)" opacity="0.85" />
            </g>
            <path d="M 32 4 L 60 56 L 4 56 Z" fill="none" stroke="var(--pz-ink)" stroke-width="2.5" stroke-linejoin="round" />
            <circle cx="52" cy="14" r="9" fill="var(--pz-bg)" stroke="var(--pz-ink)" stroke-width="2" />
            <text x="52" y="18.5" text-anchor="middle" font-family="var(--pz-font-display)" font-size="11" font-weight="700" fill="var(--pz-ink)">₿</text>
          </svg>
          <span>Pizza Day Brno</span>
        </a>
        <div class="pz-nav-links">
          <a href="#expect">{{ t.nav.what }}</a>
          <a href="#schedule">{{ t.nav.schedule }}</a>
          <a href="#getting">{{ t.nav.getting }}</a>
          <a href="#faq">{{ t.nav.faq }}</a>
          <a href="#signup">{{ t.nav.signup }}</a>
        </div>
        <div class="pz-lang-toggle" role="tablist" aria-label="Language">
          <button :data-on="lang === 'cs' ? '1' : '0'" @click="lang = 'cs'">CS</button>
          <button :data-on="lang === 'en' ? '1' : '0'" @click="lang = 'en'">EN</button>
        </div>
      </div>
    </nav>

    <!-- HERO: split layout + stickers from sticker layout -->
    <header id="top" class="pz-hero pz-wrap" data-layout="split">
      <!-- Kids badge -->
      <div class="pz-kids-badge" :aria-label="`${t.hero.kidsBadge.line1} ${t.hero.kidsBadge.line2} — ${t.hero.kidsBadge.sub}`">
        <svg viewBox="0 0 80 80" class="pz-kids-badge-ring" aria-hidden="true">
          <defs><path id="pz-kb-arc" d="M 40,40 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" /></defs>
          <text font-size="7.6" letter-spacing="1.4" font-family="var(--pz-font-mono)" fill="currentColor">
            <textPath href="#pz-kb-arc" startOffset="0">• {{ t.hero.kidsBadge.sub }} • {{ t.hero.kidsBadge.sub }} </textPath>
          </text>
        </svg>
        <div class="pz-kids-badge-core">
          <span class="pz-kids-badge-emoji" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
              <circle cx="11" cy="13" r="5.5" fill="currentColor" />
              <circle cx="22" cy="16" r="3.8" fill="currentColor" />
              <path d="M 5 28 C 5 22 8 19 11 19 C 14 19 17 22 17 28 Z" fill="currentColor" />
              <path d="M 18 28 C 18 24 20 22 22 22 C 24 22 26 24 26 28 Z" fill="currentColor" />
              <circle cx="17.5" cy="24.5" r="1.4" fill="var(--pz-card)" />
            </svg>
          </span>
          <span class="pz-kids-badge-text">
            <strong>{{ t.hero.kidsBadge.line1 }}</strong>
            <strong>{{ t.hero.kidsBadge.line2 }}</strong>
          </span>
        </div>
      </div>

      <!-- Stickers (split + sticker layout combined) -->
      <span class="pz-sticker pz-sticker--1">{{ t.hero.stickers.free }}</span>
      <span class="pz-sticker pz-sticker--2">{{ t.hero.stickers.curious }}</span>
      <span class="pz-sticker pz-sticker--3">{{ t.hero.stickers.bitcoiners }}</span>

      <!-- Left column -->
      <div class="pz-hero-content">
        <h1 class="pz-hero-title"><em>{{ t.hero.title[0] }}</em><br>{{ t.hero.title[1] }}</h1>
        <p class="pz-hero-sub">{{ t.hero.sub }}</p>
        <div class="pz-hero-meta">
          <span class="pz-meta-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" stroke-linecap="round" /></svg>
            {{ t.hero.time }}
          </span>
          <span class="pz-meta-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></svg>
            {{ t.hero.place }}
          </span>
        </div>
        <div class="pz-hero-actions">
          <a href="#signup" class="pz-btn pz-btn-primary">{{ t.hero.cta }}</a>
          <a href="#schedule" class="pz-btn pz-btn-ghost">{{ t.hero.cta2 }} →</a>
        </div>
      </div>

      <!-- Right column: hero mark -->
      <div class="pz-hero-mark-wrap">
        <svg viewBox="0 0 400 400" class="pz-hero-mark" aria-hidden="true">
          <defs>
            <clipPath id="pz-hm-slice"><path d="M 200 30 L 370 350 L 30 350 Z" /></clipPath>
            <radialGradient id="pz-hm-shade" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stop-color="var(--pz-accent-soft)" stop-opacity="1" />
              <stop offset="100%" stop-color="var(--pz-accent)" stop-opacity="1" />
            </radialGradient>
          </defs>
          <g clip-path="url(#pz-hm-slice)">
            <path d="M 200 30 L 370 350 L 30 350 Z" fill="url(#pz-hm-shade)" />
            <circle cx="140" cy="240" r="14" fill="var(--pz-card)" />
            <circle cx="260" cy="270" r="11" fill="var(--pz-card)" />
            <circle cx="190" cy="180" r="9" fill="var(--pz-card)" />
            <circle cx="290" cy="200" r="7" fill="var(--pz-card)" />
            <circle cx="160" cy="310" r="8" fill="var(--pz-card)" />
            <circle cx="225" cy="320" r="9" fill="var(--pz-card)" />
            <path d="M 120 200 Q 130 195 140 205 L 132 215 Z" fill="var(--pz-secondary)" opacity="0.85" />
            <path d="M 260 230 Q 270 225 280 235 L 272 245 Z" fill="var(--pz-secondary)" opacity="0.85" />
            <path d="M 200 270 Q 210 265 220 275 L 212 285 Z" fill="var(--pz-secondary)" opacity="0.85" />
          </g>
          <path d="M 200 30 L 370 350 L 30 350 Z" fill="none" stroke="var(--pz-ink)" stroke-width="6" stroke-linejoin="round" />
          <circle cx="332" cy="68" r="44" fill="var(--pz-bg)" stroke="var(--pz-ink)" stroke-width="5" />
          <text x="332" y="86" text-anchor="middle" font-family="var(--pz-font-display)" font-size="56" font-weight="700" fill="var(--pz-ink)">₿</text>
        </svg>
      </div>
    </header>

    <!-- EXPECT CARDS — lift up to overlap hero edge -->
    <section id="expect" class="pz-section pz-expect">
      <div class="pz-wrap">
        <div class="pz-expect-grid">
          <article v-for="card in t.expect.cards" :key="card.n" class="pz-expect-card">
            <h3>{{ card.title }}</h3>
            <p>{{ card.body }}</p>
            <span class="pz-badge">{{ card.badge }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- SCHEDULE -->
    <section id="schedule" class="pz-section pz-section--tint">
      <div class="pz-wrap">
        <div class="pz-section-head">
          <span class="pz-eyebrow">{{ t.schedule.eyebrow }}</span>
          <h2 class="pz-h-section">{{ t.schedule.head }}</h2>
          <p class="pz-lede">{{ t.schedule.lede }}</p>
        </div>
        <div class="pz-schedule">
          <div v-for="row in t.schedule.rows" :key="row.t" class="pz-sched-row">
            <span class="pz-sched-t">{{ row.t }}</span>
            <span class="pz-sched-title">{{ row.title }}<small>{{ row.sub }}</small></span>
            <span class="pz-sched-tag">{{ row.tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- BRING / PROVIDE -->
    <section id="bring" class="pz-section">
      <div class="pz-wrap">
        <div class="pz-section-head">
          <span class="pz-eyebrow">{{ t.bring.eyebrow }}</span>
          <h2 class="pz-h-section">{{ t.bring.head }}</h2>
          <p class="pz-lede">{{ t.bring.lede }}</p>
        </div>
        <div class="pz-bring-split">
          <div class="pz-bring-col">
            <span class="pz-eyebrow">01</span>
            <h3>{{ t.bring.we.title }}</h3>
            <ul class="pz-bring-list">
              <li v-for="(item, i) in t.bring.we.items" :key="i">{{ item }}</li>
            </ul>
          </div>
          <div class="pz-bring-col pz-bring-col--you">
            <span class="pz-eyebrow">02</span>
            <h3>{{ t.bring.you.title }}</h3>
            <ul class="pz-bring-list">
              <li v-for="(item, i) in t.bring.you.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- GETTING THERE -->
    <section id="getting" class="pz-section pz-section--tint">
      <div class="pz-wrap">
        <div class="pz-section-head">
          <span class="pz-eyebrow">{{ t.getting.eyebrow }}</span>
          <h2 class="pz-h-section">{{ t.getting.head }}</h2>
          <p class="pz-lede">{{ t.getting.lede }}</p>
        </div>
        <div class="pz-getting">
          <div class="pz-transit-list">
            <div v-for="(row, i) in t.getting.rows" :key="i" class="pz-transit-row">
              <span class="pz-transit-ico">
                <svg viewBox="0 0 24 24" v-html="transitIcons[row.ico]" />
              </span>
              <div>
                <h4>{{ row.title }}</h4>
                <p v-html="row.body.replace(/<em>/g, '<span class=\'pz-line\'>').replace(/<\/em>/g, '</span>')" />
              </div>
            </div>
          </div>
          <aside class="pz-map-card">
            <div class="pz-map-stage">
              <svg class="pz-map-pin" viewBox="0 0 36 36">
                <path d="M18 2 C 10 2 5 8 5 15 C 5 23 18 34 18 34 C 18 34 31 23 31 15 C 31 8 26 2 18 2 Z" fill="var(--pz-accent)" stroke="var(--pz-ink)" stroke-width="2" />
                <circle cx="18" cy="15" r="4.5" fill="var(--pz-card)" />
              </svg>
            </div>
            <div class="pz-map-meta">
              <span class="pz-map-name">{{ t.getting.park.name }}</span>
              <span class="pz-map-coord">{{ t.getting.park.coord }}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="pz-section">
      <div class="pz-wrap">
        <div class="pz-section-head">
          <span class="pz-eyebrow">{{ t.faq.eyebrow }}</span>
          <h2 class="pz-h-section">{{ t.faq.head }}</h2>
          <p class="pz-lede">{{ t.faq.lede }}</p>
        </div>
        <div class="pz-faq" :key="lang">
          <details v-for="(row, i) in t.faq.rows" :key="i" class="pz-faq-row" :open="i === 0">
            <summary>
              <span class="pz-q-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="pz-q-text">{{ row.q }}</span>
              <span class="pz-q-toggle" aria-hidden="true" />
            </summary>
            <div class="pz-faq-a">{{ row.a }}</div>
          </details>
        </div>
      </div>
    </section>

    <!-- ORGANIZERS -->
    <section id="org" class="pz-section pz-section--tint">
      <div class="pz-wrap">
        <div class="pz-section-head">
          <span class="pz-eyebrow">{{ t.org.eyebrow }}</span>
          <h2 class="pz-h-section">{{ t.org.head }}</h2>
        </div>
        <div class="pz-org-card">
          <div class="pz-org-text">
            <h3>{{ t.org.cta }}</h3>
            <p>{{ t.org.lede }}</p>
            <div class="pz-org-links">
              <a v-for="link in t.org.links" :key="link.label" :href="link.href" target="_blank" rel="noopener" class="pz-org-link">
                {{ link.label }}
              </a>
            </div>
          </div>
          <div class="pz-org-art">
            <img src="/jednadvacetbrno.jpg" alt="Jednadvacet Brno community" class="pz-org-photo" />
          </div>
        </div>
      </div>
    </section>

    <!-- SIGNUP SECTION -->
    <section id="signup" class="pz-section">
      <div class="pz-wrap">
        <div class="pz-signup">
          <div class="pz-signup-head">
            <span class="pz-signup-eyebrow">{{ t.signup.eyebrow }}</span>
            <h3>
              {{ t.signup.head.split(t.signup.headAccent)[0] }}<span class="pz-signup-accent">{{ t.signup.headAccent }}</span>{{ t.signup.head.split(t.signup.headAccent)[1] }}
            </h3>
            <p>{{ t.signup.lede }}</p>
          </div>
          <div v-if="emailDone" class="pz-signup-success">
            <h4>{{ t.signup.success }}</h4>
            <p>{{ t.signup.successSub }}</p>
          </div>
          <form v-else class="pz-signup-form" @submit.prevent="submitSignup">
            <div class="pz-input-group">
              <label for="pz-email">{{ t.signup.emailLabel }}</label>
              <input id="pz-email" type="email" :placeholder="t.signup.emailPh" v-model="email" />
            </div>
            <div class="pz-signup-or">a/nebo</div>
            <div class="pz-input-group">
              <label for="pz-phone">{{ t.signup.phoneLabel }}</label>
              <input id="pz-phone" type="tel" :placeholder="t.signup.phonePh" v-model="phone" />
              <span v-if="!email.trim() && !phone.trim()" class="pz-input-hint">{{ t.signup.contactHint }}</span>
            </div>
            <div class="pz-input-group">
              <label>{{ t.signup.langLabel }}</label>
              <div class="pz-lang-radio">
                <button type="button" :data-on="prefLang === 'cs' ? '1' : '0'" @click="prefLang = 'cs'">Česky</button>
                <button type="button" :data-on="prefLang === 'en' ? '1' : '0'" @click="prefLang = 'en'">English</button>
              </div>
            </div>
            <p v-if="signupError" class="pz-signup-error">{{ signupError }}</p>
            <button type="submit" class="pz-signup-submit" :disabled="!email.trim() && !phone.trim()">{{ t.signup.submit }}</button>
            <p class="pz-signup-fine">{{ t.signup.fine }}</p>
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="pz-footer">
      <div class="pz-wrap pz-footer-inner">
        <div class="pz-brand">
          <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
            <defs><clipPath id="pz-bm-bite-f"><path d="M 32 4 L 60 56 L 4 56 Z" /></clipPath></defs>
            <g clip-path="url(#pz-bm-bite-f)">
              <path d="M 32 4 L 60 56 L 4 56 Z" fill="var(--pz-accent)" />
              <circle cx="22" cy="40" r="3" fill="var(--pz-card)" opacity="0.85" />
              <circle cx="38" cy="44" r="2.4" fill="var(--pz-card)" opacity="0.85" />
            </g>
            <path d="M 32 4 L 60 56 L 4 56 Z" fill="none" stroke="var(--pz-ink)" stroke-width="2.5" stroke-linejoin="round" />
            <circle cx="52" cy="14" r="9" fill="var(--pz-bg)" stroke="var(--pz-ink)" stroke-width="2" />
            <text x="52" y="18.5" text-anchor="middle" font-family="var(--pz-font-display)" font-size="11" font-weight="700" fill="var(--pz-ink)">₿</text>
          </svg>
          <span>{{ t.footer.rights }}</span>
        </div>
        <div class="pz-footer-links">
          <a v-for="link in t.footer.links" :key="link.label" :href="link.href">{{ link.label }}</a>
        </div>
      </div>
    </footer>

    <!-- SIGNUP FAB — "both" placement: section above + FAB here -->
    <div v-if="!fabDismissed" class="pz-signup-fab">
      <button type="button" class="pz-fab-close" @click="fabDismissed = true" aria-label="Dismiss">✕</button>
      <button type="button" class="pz-fab-main" @click="goToSignup" :aria-label="t.fab.label">
        <span class="pz-fab-pulse" aria-hidden="true" />
        <span class="pz-fab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 7l9 6 9-6" /><rect x="3" y="5" width="18" height="14" rx="2" />
          </svg>
        </span>
        <span class="pz-fab-label">
          <strong>{{ t.fab.label }}</strong>
          <em>{{ t.fab.sub }}</em>
        </span>
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Pizza Day Brno 2026',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap',
    },
  ],
})

const lang = ref<'cs' | 'en'>('cs')
const fabDismissed = ref(false)
const prefLang = ref<'cs' | 'en'>('cs')
const emailDone = ref(false)
const signupError = ref('')
const email = ref('')
const phone = ref('')

async function submitSignup() {
  signupError.value = ''
  if (!email.value.trim() && !phone.value.trim()) return
  try {
    await $fetch('/api/pizzaday/signup', {
      method: 'POST',
      body: { email: email.value, phone: phone.value, prefLang: prefLang.value },
    })
    emailDone.value = true
  } catch {
    signupError.value = lang.value === 'cs'
      ? 'Něco se pokazilo, zkus to znovu.'
      : 'Something went wrong, please try again.'
  }
}

function goToSignup() {
  const target = document.getElementById('signup')
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top, behavior: 'smooth' })
  setTimeout(() => (document.getElementById('pz-email') as HTMLInputElement)?.focus(), 600)
}

const transitIcons: Record<string, string> = {
  tram: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="14" rx="2.5"/><circle cx="9" cy="14" r="1.2"/><circle cx="15" cy="14" r="1.2"/><path d="M5 9h14"/><path d="M8 21l1.5-3M16 21l-1.5-3"/></g>`,
  walk: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M9 22l3-7-3-3 2-5 4 3 3 1"/><path d="M9 14l-2 4"/></g>`,
  bike: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="17" r="4"/><circle cx="18" cy="17" r="4"/><path d="M6 17l4-7h5l3 7M10 10l3 7"/><circle cx="15" cy="5" r="1.2" fill="currentColor"/></g>`,
  car:  `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-3l2-4h12l2 4v3"/><rect x="3" y="13" width="18" height="5" rx="1.5"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/></g>`,
}

const copy = {
  cs: {
    nav: { what: 'Co tě čeká', schedule: 'Program', getting: 'Jak se tam dostat', faq: 'Časté dotazy', signup: 'Newsletter' },
    hero: {
      title: ['Pizza Day', 'v parku'],
      sub: 'Bezplatná pizza, slunce v trávě a parta lidí, kteří ti rádi vysvětlí, co je Bitcoin — beze spěchu, bez žargonu. Přijď s rodinou, dětmi i bez zájmu o krypto. Stačí mít hlad.',
      time: 'So 22. května · 13:00–18:00',
      place: 'Lužánky · louka u hudebního pavilonu',
      cta: 'Přihlásit se k odběru',
      cta2: 'Program dne',
      stickers: { free: 'Pizza zdarma', curious: 'Začátečníci vítáni', bitcoiners: 'Ochotní bitcoineři po ruce' },
      kidsBadge: { line1: 'Pro celou', line2: 'rodinu', sub: 'Děti vítány' },
    },
    expect: {
      cards: [
        { n: '01', title: 'Pizza zdarma', badge: 'Do vyprodání', body: 'Objednáváme z místních pizzerií, dokud nám stačí finance. Bez registrace, bez front — prostě přijď.' },
        { n: '02', title: 'Bitcoin pro úplné začátečníky', badge: 'Beze spěchu', body: 'Nevíš nic? Skvělé. Najdeš tu lidi, kteří ti to vysvětlí lidsky, beze žargonu, a klidně dvakrát.' },
        { n: '03', title: 'Pomoc s peněženkou', badge: 'Vezmi telefon', body: 'Pomůžeme ti nastavit první peněženku a ukážeme, jak poslat platbu přes Lightning. Trvá to pět minut.' },
        { n: '04', title: 'Merch & komunita', badge: 'Plať CZK nebo sats', body: 'Tričko, samolepky, propojení s místní komunitou. Výtěžek jde na další akce.' },
      ],
    },
    schedule: {
      head: 'Program dne', eyebrow: 'Časový plán',
      lede: 'Volný formát — přijď a odejdi, kdy potřebuješ. Tyhle časy ti pomůžou se trefit do toho, co tě zajímá.',
      rows: [
        { t: '13:00', title: 'Otevření · deky v trávě', sub: 'Najdi si místo, pozdrav se. Kafe a voda připraveny.', tag: 'Příchod' },
        { t: '13:30', title: 'Uvítací kruh', sub: 'Krátké představení — kdo jsme, co tu děláme, jak to bude probíhat.', tag: 'Komunita' },
        { t: '14:00', title: 'Pizza je tady 🍕', sub: 'První várka dorazila. Ber, kolik sníš.', tag: 'Jídlo' },
        { t: '14:30', title: 'Bitcoin za 10 minut', sub: 'Lidsky vyprávěný úvod pod stromem. Vhodné i pro děti.', tag: 'Pro začátečníky' },
        { t: '15:00', title: 'Pomoc s peněženkou', sub: 'Stůl s pomocí. Vezmi telefon, nastavíme ti první peněženku a pošleme si sats.', tag: 'Hands-on' },
        { t: '16:00', title: 'Dětský koutek', sub: 'Křídy, hry, jednoduché vysvětlení peněz pro malé.', tag: 'Pro děti' },
        { t: '17:00', title: 'Volná diskuze', sub: 'Co tě zajímá? Ptáme se navzájem, vyprávíme příběhy.', tag: 'Otevřeno' },
        { t: '18:00', title: 'Úklid a loučení', sub: 'Park po sobě uklízíme — jsme tu hosté.', tag: 'Konec' },
      ],
    },
    bring: {
      head: 'Co máme · co si vezmi', eyebrow: 'Praktické',
      lede: 'Akce je pod širým nebem. Připrav se na piknikový režim.',
      we:  { title: 'Připravíme', items: ['Pizzu (dokud máme)', 'Vodu a kávu', 'Lidi, co rádi vysvětlují', 'Stínovou plachtu', 'Dětský koutek s křídami'] },
      you: { title: 'Vezmi si s sebou', items: ['Deku nebo karimatku', 'Telefon (pokud chceš peněženku)', 'Opalovací krém', 'Lahev na vodu', 'Děti, kamarády, klidně i psa'] },
    },
    getting: {
      head: 'Jak se tam dostat', eyebrow: 'Doprava',
      lede: 'Park leží 10 minut chůze od hlavního nádraží. Doporučujeme MHD nebo kolo — parkování v okolí je omezené.',
      rows: [
        { ico: 'tram', title: 'Tramvají', body: 'Linky <em>1</em>, <em>6</em> · zastávka Lužánky. Dál 3 minuty pěšky do parku.' },
        { ico: 'walk', title: 'Pěšky z centra', body: 'Z náměstí Svobody přibližně 15 minut severovýchodním směrem.' },
        { ico: 'bike', title: 'Na kole', body: 'Stojany u hlavního vstupu do parku, hned vedle pavilonu.' },
        { ico: 'car',  title: 'Autem', body: 'Parkování v okolí omezené (modrá zóna). Doporučujeme P+R Stará osada nebo MHD.' },
      ],
      park: { name: 'Lužánky · pavilon', coord: '49.2061° N · 16.6075° E' },
    },
    faq: {
      head: 'Časté dotazy', eyebrow: 'FAQ',
      lede: 'Co se nejčastěji ptáte. Pokud něco chybí, napiš nám.',
      rows: [
        { q: 'Musím o Bitcoinu něco vědět?', a: 'Vůbec nic. Akce je primárně pro lidi, kteří o tom nikdy neslyšeli nebo se za to stydí ptát. Žádná hloupá otázka neexistuje.' },
        { q: 'Je pizza opravdu zdarma?', a: 'Ano. Pizza je placená z příspěvků místní komunity. Bereme to jako pohoštění pro každého, kdo přijde. Když nám dojde, doobjednáme — dokud finance stačí.' },
        { q: 'Je to vhodné pro děti?', a: 'Ano, je to rodinná akce. V parku je dětské hřiště, máme dětský koutek s křídami a aktivity přizpůsobené dětem 4+.' },
        { q: 'Co když bude pršet?', a: 'Pokud bude lehký déšť, schováme se pod stromy a stínovou plachtu. Pokud přijde bouřka, akci přesuneme — informace pošleme do newsletteru ráno před akcí.' },
        { q: 'Můžu platit Bitcoinem za merch?', a: 'Ano, přijímáme Lightning i hotovost (CZK). Karty bohužel ne — jsme v parku.' },
        { q: 'Musím se předem registrovat?', a: 'Ne. Stačí přijít. Pokud se chceš dozvědět o dalších akcích, přihlas se k odběru novinek.' },
        { q: 'Mluví se česky, nebo anglicky?', a: 'Oboje. Většina pomocníků mluví česky i anglicky, najdeš lidi, se kterými si rozumíš.' },
      ],
    },
    org: {
      head: 'Kdo to pořádá', eyebrow: 'Organizátoři',
      lede: 'Pizza Day Brno pořádá místní bitcoinová komunita — parta dobrovolníků, kteří se scházejí každé druhé úterý a rádi sdílejí, co vědí. Žádné prodejní řeči, žádné kurzy „rychle zbohatnout". Jen lidi.',
      cta: 'Připoj se do skupiny',
      links: [
        { label: 'Signal', href: 'https://signal.group/#CjQKIK0vXB9EYpepoD4CL_aB2BXXOTSk8rXX26bjIfVTmeZqEhCOdTX83XGSUnYr6BIwMgwy' },
        { label: 'Instagram', href: 'https://www.instagram.com/jednadvacetorg' },
        { label: 'X', href: 'https://x.com/jednadvacetorg' },
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573496275870' },
        { label: 'Nostr', href: 'https://njump.me/npub18csp5akqc4dfz9acspxqpg6ptx23gcjaapds0th7a7n6muux3fdqfjy4jv' },
      ],
    },
    signup: {
      head: 'Buď u dalších akcí', headAccent: 'dalších akcí', eyebrow: 'Newsletter',
      lede: 'Maximálně jeden e-mail měsíčně. Pošleme upozornění před akcemi, případně změny v programu (déšť, posun času). Žádný spam, žádné prodejní řeči.',
      emailLabel: 'E-mail', emailPh: 'tvoje@adresa.cz',
      phoneLabel: 'Telefon / SMS', phonePh: '+420',
      contactHint: 'Vyplň aspoň jedno z polí výše.',
      langLabel: 'Preferovaný jazyk',
      submit: 'Přihlásit se',
      fine: 'Odhlásit se můžeš jedním klikem. Údaje nikam neprodáváme.',
      success: 'Hotovo! Uvidíme se v parku.',
      successSub: 'Potvrzovací e-mail je na cestě. Pokud nedorazí do pěti minut, mrkni do spamu.',
    },
    fab: { label: 'Newsletter', sub: 'Dej vědět, kdy bude další akce' },
    footer: {
      rights: 'Pizza Day Brno · komunitní akce',
      links: [{ label: 'GDPR / Soukromí', href: '#' }, { label: 'Kontakt', href: 'mailto:hello@pizzadaybrno.cz' }],
    },
  },
  en: {
    nav: { what: 'What to expect', schedule: 'Schedule', getting: 'Getting there', faq: 'FAQ', signup: 'Newsletter' },
    hero: {
      title: ['Pizza Day', 'in the park'],
      sub: 'Free pizza, sunshine on the grass, and a bunch of friendly people who will gladly explain Bitcoin — no rush, no jargon. Bring your family, your kids, your curiosity. Or just your appetite.',
      time: 'Sat 22 May · 13:00–18:00',
      place: 'Lužánky · meadow by the music pavilion',
      cta: 'Get the newsletter',
      cta2: "See what's on",
      stickers: { free: 'Pizza on us', curious: 'Beginners welcome', park: 'In the park · under a tree' },
      kidsBadge: { line1: 'Family-', line2: 'friendly', sub: 'Kids welcome' },
    },
    expect: {
      cards: [
        { n: '01', title: 'Free pizza', badge: 'While it lasts', body: 'We order from local pizzerias as long as community funds hold. No sign-up, no queue — just show up.' },
        { n: '02', title: 'Bitcoin for absolute beginners', badge: 'No rush', body: "Know nothing? Perfect. You'll find friendly people who'll walk you through it in plain language, twice if needed." },
        { n: '03', title: 'Wallet help desk', badge: 'Bring your phone', body: "We'll help you set up your first wallet and send a little Lightning payment together. Takes about five minutes." },
        { n: '04', title: 'Merch & community', badge: 'CZK or sats', body: 'T-shirts, stickers, hooks into the local meetups. Everything we make funds the next event.' },
      ],
    },
    schedule: {
      head: "What's on", eyebrow: 'Schedule',
      lede: "Free-form — come and go as you please. These times help you catch what's interesting to you.",
      rows: [
        { t: '13:00', title: 'Doors · blankets down', sub: 'Find a spot, say hi. Coffee and water set up.', tag: 'Arrive' },
        { t: '13:30', title: 'Welcome circle', sub: 'Quick intro — who we are, what we do, how the day flows.', tag: 'Community' },
        { t: '14:00', title: 'Pizza arrives 🍕', sub: 'First round shows up. Take as much as you can eat.', tag: 'Food' },
        { t: '14:30', title: 'Bitcoin in 10 minutes', sub: 'A friendly intro under the tree. Kid-appropriate.', tag: 'Beginner' },
        { t: '15:00', title: 'Wallet help desk', sub: "Help table. Bring your phone — we'll set up a wallet and send sats around.", tag: 'Hands-on' },
        { t: '16:00', title: 'Kids corner', sub: 'Chalk, simple games, a kid-sized explanation of money.', tag: 'For kids' },
        { t: '17:00', title: 'Open chat', sub: "Ask anything. We'll trade stories and answer each other's questions.", tag: 'Open mic' },
        { t: '18:00', title: 'Pack down', sub: "We leave the park cleaner than we found it. We're guests here.", tag: 'Wrap' },
      ],
    },
    bring: {
      head: 'What we bring · what you bring', eyebrow: 'Practical',
      lede: "We're outside. Picnic mode all the way.",
      we:  { title: "We'll provide", items: ['Pizza (while supplies last)', 'Water & coffee', 'People happy to explain', 'A shade tarp', "Kids' chalk corner"] },
      you: { title: 'You bring', items: ['A blanket or mat', 'A phone (if you want wallet help)', 'Sunscreen', 'Water bottle', 'Kids, friends, even your dog'] },
    },
    getting: {
      head: 'Getting there', eyebrow: 'Travel',
      lede: 'The park is a 10-minute walk from the main station. Tram or bike is easiest — parking nearby is limited.',
      rows: [
        { ico: 'tram', title: 'By tram', body: 'Lines <em>1</em>, <em>6</em> · stop Lužánky. Then 3 minutes on foot into the park.' },
        { ico: 'walk', title: 'On foot from the center', body: 'About 15 minutes northeast from Náměstí Svobody.' },
        { ico: 'bike', title: 'By bike', body: 'Bike racks at the main park entrance, next to the pavilion.' },
        { ico: 'car',  title: 'By car', body: 'Limited paid parking (blue zone) nearby. P+R Stará osada + tram is easier.' },
      ],
      park: { name: 'Lužánky · pavilion', coord: '49.2061° N · 16.6075° E' },
    },
    faq: {
      head: 'Frequent questions', eyebrow: 'FAQ',
      lede: 'The things people ask the most. If something is missing — just write us.',
      rows: [
        { q: 'Do I need to know anything about Bitcoin?', a: "Not a thing. The event is mostly for people who've never touched it, or feel awkward asking. There are no dumb questions." },
        { q: 'Is the pizza really free?', a: 'Yes. The pizza is paid for by the local community. First-come, first-served — we keep ordering as long as funds hold.' },
        { q: 'Is it kid-friendly?', a: "Absolutely. It's a family event. There's a playground in the park and a dedicated kids' corner with chalk and simple activities for ages 4+." },
        { q: 'What if it rains?', a: "Light rain — we move under the trees and our tarp. Real storm — we postpone. We'll send a note to the newsletter the morning of." },
        { q: 'Can I pay for merch in Bitcoin?', a: "Yes — Lightning and Czech crowns both work. We can't take cards (we're literally in a park)." },
        { q: 'Do I need to RSVP?', a: 'Nope. Just show up. If you want to hear about future events, hop on the newsletter below.' },
        { q: 'Czech or English?', a: "Both. Most of the helpers are bilingual — you'll find people you can talk to comfortably." },
      ],
    },
    org: {
      head: 'Who organizes this', eyebrow: 'Organizers',
      lede: "Pizza Day Brno is run by the local Bitcoin community — a small crew of volunteers who meet every other Tuesday and like to share what we know. No sales pitch, no get-rich-quick. Just people.",
      cta: 'Join the meetup',
      links: [
        { label: 'Signal', href: 'https://signal.group/#CjQKIK0vXB9EYpepoD4CL_aB2BXXOTSk8rXX26bjIfVTmeZqEhCOdTX83XGSUnYr6BIwMgwy' },
        { label: 'Instagram', href: 'https://www.instagram.com/jednadvacetorg' },
        { label: 'X', href: 'https://x.com/jednadvacetorg' },
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573496275870' },
        { label: 'Nostr', href: 'https://njump.me/npub18csp5akqc4dfz9acspxqpg6ptx23gcjaapds0th7a7n6muux3fdqfjy4jv' },
      ],
    },
    signup: {
      head: 'Get the next one in your inbox', headAccent: 'next one', eyebrow: 'Newsletter',
      lede: "One email a month, max. We send a heads-up before each event, plus same-day changes (weather, time shifts). No spam, no sales pitch.",
      emailLabel: 'Email', emailPh: 'you@example.com',
      phoneLabel: 'Phone / SMS', phonePh: '+420',
      contactHint: 'Fill in at least one of the fields above.',
      langLabel: 'Preferred language',
      submit: 'Subscribe',
      fine: "One-click unsubscribe. We don't sell or share your details.",
      success: "You're in! See you in the park.",
      successSub: "Confirmation email is on its way. If it doesn't show up in five minutes, check your spam folder.",
    },
    fab: { label: 'Newsletter', sub: 'Hear when the next one happens' },
    footer: {
      rights: 'Pizza Day Brno · community event',
      links: [{ label: 'Privacy / GDPR', href: '#' }, { label: 'Contact', href: 'mailto:hello@pizzadaybrno.cz' }],
    },
  },
}

const t = computed(() => copy[lang.value])
</script>

<style>
/* ── Pizza Day Brno — orange/sunset palette ───────────────────────── */
.pz {
  --pz-font-display: 'Bricolage Grotesque', system-ui, sans-serif;
  --pz-font-body: 'Manrope', system-ui, sans-serif;
  --pz-font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --pz-bg: #F4EDDD;
  --pz-bg-tint: #EBE2CC;
  --pz-ink: #1B1614;
  --pz-ink-soft: #3B302A;
  --pz-muted: #6B5E54;
  --pz-rule: rgba(27, 22, 20, 0.14);
  --pz-card: #FBF6E8;
  --pz-accent: #D86A2C;
  --pz-accent-deep: #B0481A;
  --pz-accent-soft: #F2C49A;
  --pz-secondary: #5C6A3A;

  font-family: var(--pz-font-body);
  font-size: 17px;
  line-height: 1.5;
  color: var(--pz-ink);
  background: var(--pz-bg);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

.pz *, .pz *::before, .pz *::after { box-sizing: border-box; }
.pz a { color: inherit; }
.pz ::selection { background: var(--pz-accent); color: var(--pz-card); }

/* ── Layout ─────────────────────────────────────────────────────── */
.pz-wrap {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
}

.pz-section {
  padding: clamp(72px, 9vw, 128px) 0;
  border-top: 1px solid var(--pz-rule);
}

.pz-section--tint { background: var(--pz-bg-tint); }

.pz-section-head {
  display: grid;
  gap: 16px;
  margin-bottom: clamp(36px, 5vw, 64px);
  max-width: 760px;
}

/* ── Typography ─────────────────────────────────────────────────── */
.pz-h-section {
  font-family: var(--pz-font-display);
  font-weight: 600;
  font-size: clamp(28px, 4.4vw, 52px);
  letter-spacing: -0.02em;
  line-height: 1.02;
  margin: 0 0 8px;
  text-wrap: balance;
}

.pz-eyebrow {
  font-family: var(--pz-font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--pz-muted);
}

.pz-lede {
  font-size: clamp(17px, 1.6vw, 21px);
  color: var(--pz-ink-soft);
  max-width: 56ch;
  text-wrap: pretty;
  margin: 0;
}

/* ── Nav ──────────────────────────────────────────────────────── */
.pz-nav {
  position: sticky;
  top: 0;
  z-index: 30;
  background: color-mix(in srgb, var(--pz-bg) 85%, transparent);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid var(--pz-rule);
}

.pz-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 14px 32px;
}

.pz-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--pz-font-display);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  text-decoration: none;
}

.pz-nav-links {
  display: flex;
  gap: 28px;
  font-size: 14px;
  color: var(--pz-ink-soft);
}

.pz-nav-links a {
  text-decoration: none;
  transition: color 0.15s;
}

.pz-nav-links a:hover { color: var(--pz-accent); }

.pz-lang-toggle {
  display: inline-flex;
  border: 1px solid var(--pz-rule);
  border-radius: 999px;
  padding: 3px;
  background: var(--pz-card);
  font-family: var(--pz-font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
}

.pz-lang-toggle button {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--pz-muted);
  padding: 5px 11px;
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
  letter-spacing: inherit;
  transition: background 0.15s, color 0.15s;
}

.pz-lang-toggle button[data-on="1"] {
  background: var(--pz-ink);
  color: var(--pz-bg);
}

@media (max-width: 760px) {
  .pz-nav-links { display: none; }
}

/* ── Hero ─────────────────────────────────────────────────────── */
.pz-hero {
  position: relative;
  padding: clamp(40px, 5vw, 64px) 32px clamp(80px, 9vw, 140px);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 60px;
  align-items: center;
}

.pz-hero-title {
  font-family: var(--pz-font-display);
  font-weight: 700;
  font-size: clamp(56px, 8vw, 120px);
  letter-spacing: -0.035em;
  line-height: 0.88;
  margin: 0;
}

.pz-hero-title em {
  font-style: normal;
  color: var(--pz-accent);
}

.pz-hero-sub {
  margin-top: 28px;
  font-size: clamp(18px, 2vw, 24px);
  color: var(--pz-ink-soft);
  max-width: 52ch;
  text-wrap: pretty;
  line-height: 1.4;
}

.pz-hero-meta {
  margin-top: 44px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.pz-meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px 10px 14px;
  background: var(--pz-card);
  border: 1px solid var(--pz-rule);
  border-radius: 999px;
  font-family: var(--pz-font-mono);
  font-size: 13px;
  letter-spacing: 0.02em;
}

.pz-meta-pill svg { width: 16px; height: 16px; flex-shrink: 0; opacity: 0.7; }

.pz-hero-actions {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.pz-btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border: 0;
  border-radius: 999px;
  background: var(--pz-ink);
  color: var(--pz-bg);
  font: 500 15px/1 var(--pz-font-body);
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.12s, background 0.15s;
}

.pz-btn:hover { transform: translateY(-1px); }

.pz-btn-primary { background: var(--pz-accent); color: #fff; }
.pz-btn-primary:hover { background: var(--pz-accent-deep); }

.pz-btn-ghost {
  background: transparent;
  color: var(--pz-ink);
  border: 1px solid var(--pz-rule);
}

.pz-btn-ghost:hover { background: var(--pz-card); }

.pz-hero-mark-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pz-hero-mark {
  width: 100%;
  max-width: 440px;
  height: auto;
}

/* Stickers — positioned within the hero (position: relative) */
.pz-sticker {
  position: absolute;
  background: var(--pz-card);
  border: 1px solid var(--pz-rule);
  border-radius: 14px;
  padding: 14px 18px;
  font-family: var(--pz-font-mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  z-index: 2;
}

.pz-sticker--1 {
  top: 7%;
  right: 34%;
  background: var(--pz-accent);
  color: #fff;
  border-color: transparent;
  transform: rotate(6deg);
  font-size: 14px;
  padding: 18px 22px;
}

.pz-sticker--2 {
  top: 48%;
  right: 26%;
  transform: rotate(-4deg);
}

.pz-sticker--3 {
  bottom: 20%;
  right: 5%;
  transform: rotate(5deg);
}

@media (max-width: 900px) {
  .pz-hero {
    grid-template-columns: 1fr;
    padding-bottom: clamp(48px, 6vw, 80px);
  }
  .pz-hero-mark { max-width: 280px; }
  .pz-sticker { display: none; }
}

/* ── Kids badge ───────────────────────────────────────────────── */
.pz-kids-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 124px;
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transform: rotate(8deg);
  pointer-events: none;
  animation: pzKidsBadgeIn 0.7s cubic-bezier(0.2, 1.4, 0.4, 1) 0.2s both;
}

@keyframes pzKidsBadgeIn {
  from { transform: rotate(-25deg) scale(0.3); opacity: 0; }
  to   { transform: rotate(8deg) scale(1); opacity: 1; }
}

.pz-kids-badge-ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  color: var(--pz-ink);
  animation: pzKidsRingSpin 22s linear infinite;
}

@keyframes pzKidsRingSpin { to { transform: rotate(360deg); } }

.pz-kids-badge-core {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: var(--pz-accent);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  box-shadow: 0 6px 18px color-mix(in srgb, var(--pz-accent) 35%, transparent);
}

.pz-kids-badge-core::before {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  border: 1.5px dashed color-mix(in srgb, #fff 50%, transparent);
}

.pz-kids-badge-emoji {
  display: flex;
  margin-top: -2px;
}

.pz-kids-badge-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--pz-font-display);
  font-weight: 700;
  font-size: 13px;
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .pz-kids-badge { width: 104px; height: 104px; top: 16px; right: 16px; }
  .pz-kids-badge-core { width: 76px; height: 76px; }
  .pz-kids-badge-text { font-size: 11px; }
}

@media (prefers-reduced-motion: reduce) {
  .pz-kids-badge { animation: none; }
  .pz-kids-badge-ring { animation: none; }
}

/* ── Expect cards ─────────────────────────────────────────────── */
.pz-expect {
  border-top: 0;
  padding-top: 0;
  padding-bottom: clamp(72px, 9vw, 128px);
  position: relative;
  z-index: 2;
}

.pz-expect .pz-expect-grid {
  margin-top: clamp(-110px, -7vw, -70px);
}

.pz-expect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.pz-expect-card {
  position: relative;
  padding: 28px 26px 26px;
  background: var(--pz-card);
  border: 1px solid var(--pz-rule);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
  transition: transform 0.15s, box-shadow 0.15s;
}

.pz-expect-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.09);
}

.pz-expect-card h3 {
  font-family: var(--pz-font-display);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.05;
  margin: 0;
}

.pz-expect-card p {
  margin: 0;
  color: var(--pz-ink-soft);
  font-size: 15.5px;
  line-height: 1.5;
}

.pz-badge {
  display: inline-flex;
  align-self: flex-start;
  margin-top: 4px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--pz-accent-soft);
  color: var(--pz-accent-deep);
  font-family: var(--pz-font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ── Schedule ─────────────────────────────────────────────────── */
.pz-schedule {
  max-width: 880px;
  border-top: 1px solid var(--pz-rule);
}

.pz-sched-row {
  display: grid;
  grid-template-columns: 110px 1fr auto;
  align-items: baseline;
  gap: 24px;
  padding: 20px 4px;
  border-bottom: 1px solid var(--pz-rule);
  transition: background 0.12s;
}

.pz-sched-row:hover { background: color-mix(in srgb, var(--pz-accent-soft) 30%, transparent); }

.pz-sched-t {
  font-family: var(--pz-font-mono);
  font-size: 17px;
  font-weight: 500;
  color: var(--pz-accent-deep);
  font-variant-numeric: tabular-nums;
}

.pz-sched-title {
  font-family: var(--pz-font-display);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.pz-sched-title small {
  display: block;
  font-family: var(--pz-font-body);
  font-size: 14.5px;
  font-weight: 400;
  color: var(--pz-muted);
  margin-top: 4px;
  letter-spacing: 0;
}

.pz-sched-tag {
  font-family: var(--pz-font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--pz-muted);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .pz-sched-row { grid-template-columns: 1fr; gap: 4px; padding: 16px 4px; }
  .pz-sched-tag { order: -1; }
}

/* ── Bring ────────────────────────────────────────────────────── */
.pz-bring-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--pz-rule);
  border-radius: 24px;
  overflow: hidden;
  background: var(--pz-card);
}

.pz-bring-col { padding: 36px 36px 40px; }

.pz-bring-col--you {
  border-left: 1px solid var(--pz-rule);
  background: var(--pz-bg-tint);
}

.pz-bring-col h3 {
  font-family: var(--pz-font-display);
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 4px;
  letter-spacing: -0.01em;
}

.pz-bring-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pz-bring-list li {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font-size: 16px;
  line-height: 1.4;
}

.pz-bring-list li::before {
  content: "";
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--pz-accent);
  transform: translateY(2px);
}

.pz-bring-col--you .pz-bring-list li::before { background: var(--pz-secondary); }

@media (max-width: 720px) {
  .pz-bring-split { grid-template-columns: 1fr; }
  .pz-bring-col--you { border-left: 0; border-top: 1px solid var(--pz-rule); }
}

/* ── Getting there ────────────────────────────────────────────── */
.pz-getting {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: start;
}

.pz-transit-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.pz-transit-row {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 18px;
  padding: 18px 0;
  border-bottom: 1px solid var(--pz-rule);
  align-items: start;
}

.pz-transit-row:last-child { border-bottom: 0; }

.pz-transit-ico {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--pz-bg-tint);
  color: var(--pz-accent-deep);
}

.pz-transit-ico svg { width: 22px; height: 22px; }

.pz-transit-row h4 {
  margin: 0 0 4px;
  font-family: var(--pz-font-display);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.005em;
}

.pz-transit-row p {
  margin: 0;
  color: var(--pz-ink-soft);
  font-size: 15px;
  line-height: 1.5;
}

.pz-line {
  display: inline-block;
  font-family: var(--pz-font-mono);
  font-size: 12px;
  background: var(--pz-accent);
  color: #fff;
  padding: 2px 7px;
  border-radius: 4px;
  margin-right: 4px;
  letter-spacing: 0.04em;
}

.pz-map-card {
  background: var(--pz-card);
  border: 1px solid var(--pz-rule);
  border-radius: 20px;
  overflow: hidden;
  position: sticky;
  top: 100px;
}

.pz-map-stage {
  position: relative;
  aspect-ratio: 4 / 3;
  background:
    repeating-linear-gradient(45deg, var(--pz-bg-tint) 0 14px, transparent 14px 28px),
    var(--pz-card);
  border-bottom: 1px solid var(--pz-rule);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pz-map-stage::before {
  content: "park map placeholder";
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--pz-font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--pz-muted);
}

.pz-map-pin {
  position: absolute;
  top: 48%;
  left: 52%;
  width: 36px;
  height: 36px;
  transform: translate(-50%, -100%);
  z-index: 2;
}

.pz-map-meta {
  padding: 18px 22px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
}

.pz-map-name {
  font-family: var(--pz-font-display);
  font-weight: 600;
  font-size: 17px;
}

.pz-map-coord {
  font-family: var(--pz-font-mono);
  font-size: 12px;
  color: var(--pz-muted);
}

@media (max-width: 900px) {
  .pz-getting { grid-template-columns: 1fr; }
  .pz-map-card { position: static; }
}

/* ── FAQ ──────────────────────────────────────────────────────── */
.pz-faq { max-width: 880px; }

.pz-faq-row { border-top: 1px solid var(--pz-rule); }
.pz-faq-row:last-of-type { border-bottom: 1px solid var(--pz-rule); }

.pz-faq-row summary {
  list-style: none;
  cursor: pointer;
  padding: 22px 0;
  display: flex;
  align-items: baseline;
  gap: 20px;
  font-family: var(--pz-font-display);
  font-size: clamp(19px, 1.9vw, 24px);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--pz-ink);
}

.pz-faq-row summary::-webkit-details-marker { display: none; }

.pz-q-num {
  font-family: var(--pz-font-mono);
  font-size: 12px;
  font-weight: 400;
  color: var(--pz-muted);
  letter-spacing: 0.06em;
  flex-shrink: 0;
  width: 32px;
}

.pz-q-text { flex: 1; text-wrap: balance; }

.pz-q-toggle {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.pz-q-toggle::before,
.pz-q-toggle::after {
  content: "";
  position: absolute;
  background: var(--pz-ink);
  border-radius: 2px;
}

.pz-q-toggle::before { width: 14px; height: 2px; }
.pz-q-toggle::after { height: 14px; width: 2px; transition: transform 0.2s; }

.pz-faq-row[open] .pz-q-toggle::after { transform: scaleY(0); }

.pz-faq-a {
  padding: 0 0 24px 52px;
  color: var(--pz-ink-soft);
  font-size: 16.5px;
  line-height: 1.55;
  max-width: 64ch;
}

@media (max-width: 640px) {
  .pz-faq-a { padding-left: 32px; }
}

/* ── Organizers ───────────────────────────────────────────────── */
.pz-org-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--pz-rule);
  border-radius: 24px;
  overflow: hidden;
  background: var(--pz-card);
}

.pz-org-text { padding: 40px 40px 44px; }

.pz-org-text h3 {
  font-family: var(--pz-font-display);
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  margin: 8px 0 16px;
  letter-spacing: -0.015em;
  line-height: 1.05;
}

.pz-org-text p {
  margin: 0 0 16px;
  color: var(--pz-ink-soft);
  font-size: 16.5px;
  line-height: 1.55;
}

.pz-org-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.pz-org-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 1px solid var(--pz-rule);
  border-radius: 999px;
  background: var(--pz-bg);
  font-size: 13px;
  text-decoration: none;
  font-family: var(--pz-font-mono);
  letter-spacing: 0.04em;
  transition: background 0.15s;
}

.pz-org-link:hover { background: var(--pz-accent-soft); }

.pz-org-art {
  background: var(--pz-bg-tint);
  position: relative;
  min-height: 280px;
  overflow: hidden;
}

.pz-org-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 760px) {
  .pz-org-card { grid-template-columns: 1fr; }
  .pz-org-art { min-height: 200px; }
}

/* ── Signup section ───────────────────────────────────────────── */
.pz-signup {
  background: var(--pz-ink);
  color: var(--pz-bg);
  border-radius: 28px;
  padding: clamp(40px, 5vw, 64px);
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.pz-signup::before {
  content: "";
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: var(--pz-accent);
  opacity: 0.18;
  right: -120px;
  top: -120px;
  filter: blur(2px);
  pointer-events: none;
}

.pz-signup-eyebrow {
  font-family: var(--pz-font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--pz-bg) 60%, transparent);
  display: block;
  margin-bottom: 12px;
}

.pz-signup-head h3 {
  font-family: var(--pz-font-display);
  font-size: clamp(30px, 3.6vw, 48px);
  font-weight: 700;
  margin: 0 0 14px;
  letter-spacing: -0.025em;
  line-height: 1;
  text-wrap: balance;
}

.pz-signup-accent { color: var(--pz-accent); }

.pz-signup-head p {
  margin: 0;
  font-size: 16.5px;
  line-height: 1.55;
  color: color-mix(in srgb, var(--pz-bg) 75%, transparent);
  max-width: 36ch;
}

.pz-signup-form {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pz-input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pz-input-group label {
  font-family: var(--pz-font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--pz-bg) 60%, transparent);
}

.pz-input-group input {
  appearance: none;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, var(--pz-bg) 18%, transparent);
  background: color-mix(in srgb, var(--pz-bg) 6%, transparent);
  color: var(--pz-bg);
  font: 500 16px var(--pz-font-body);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.15s, background 0.15s;
}

.pz-input-group input::placeholder { color: color-mix(in srgb, var(--pz-bg) 35%, transparent); }

.pz-input-group input:focus {
  border-color: var(--pz-accent);
  background: color-mix(in srgb, var(--pz-bg) 10%, transparent);
}

.pz-lang-radio {
  display: flex;
  gap: 8px;
  padding: 4px;
  background: color-mix(in srgb, var(--pz-bg) 8%, transparent);
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--pz-bg) 16%, transparent);
}

.pz-lang-radio button {
  appearance: none;
  flex: 1;
  padding: 10px 14px;
  border: 0;
  background: transparent;
  color: color-mix(in srgb, var(--pz-bg) 65%, transparent);
  font: 500 14px var(--pz-font-body);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.pz-lang-radio button[data-on="1"] {
  background: var(--pz-accent);
  color: #fff;
}

.pz-signup-submit {
  margin-top: 8px;
  width: 100%;
  padding: 16px 22px;
  border: 0;
  border-radius: 12px;
  background: var(--pz-accent);
  color: #fff;
  font: 600 16px var(--pz-font-body);
  cursor: pointer;
  transition: background 0.15s, transform 0.12s;
}

.pz-signup-submit:hover:not(:disabled) { background: var(--pz-accent-deep); transform: translateY(-1px); }
.pz-signup-submit:disabled { opacity: 0.45; cursor: default; }

.pz-signup-error {
  margin: 0 0 4px;
  font-size: 13px;
  color: #f87171;
}

.pz-signup-or {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-family: var(--pz-font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.6;
  margin: 4px 0;
}
.pz-signup-or::before,
.pz-signup-or::after {
  content: '';
  flex: 1;
  height: 1px;
  background: currentColor;
  opacity: 0.3;
}

.pz-input-hint {
  display: block;
  margin-top: 5px;
  font-size: 12.5px;
  opacity: 0.55;
}

.pz-signup-fine {
  margin-top: 6px;
  font-size: 12.5px;
  color: color-mix(in srgb, var(--pz-bg) 50%, transparent);
  line-height: 1.5;
}

.pz-signup-success {
  padding: 32px;
  border-radius: 18px;
  background: color-mix(in srgb, var(--pz-bg) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--pz-bg) 18%, transparent);
}

.pz-signup-success h4 {
  margin: 0 0 8px;
  font-family: var(--pz-font-display);
  font-size: 22px;
  font-weight: 600;
}

.pz-signup-success p {
  margin: 0;
  font-size: 15px;
  color: color-mix(in srgb, var(--pz-bg) 75%, transparent);
}

@media (max-width: 820px) {
  .pz-signup { grid-template-columns: 1fr; padding: 36px 28px; }
}

/* ── Footer ───────────────────────────────────────────────────── */
.pz-footer {
  padding: 48px 0 56px;
  border-top: 1px solid var(--pz-rule);
  font-size: 13.5px;
  color: var(--pz-muted);
}

.pz-footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  align-items: baseline;
  padding: 0 32px;
}

.pz-footer .pz-brand { font-size: 15px; }

.pz-footer-links { display: flex; gap: 22px; }

.pz-footer-links a {
  color: var(--pz-muted);
  text-decoration: none;
  transition: color 0.15s;
}

.pz-footer-links a:hover { color: var(--pz-ink); }

/* ── Signup FAB ───────────────────────────────────────────────── */
.pz-signup-fab {
  position: fixed;
  bottom: 22px;
  right: 22px;
  z-index: 25;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  animation: pzFabIn 0.5s cubic-bezier(0.2, 0.8, 0.3, 1) 0.4s both;
}

@keyframes pzFabIn {
  from { transform: translateY(80px) scale(0.6); opacity: 0; }
  to   { transform: translateY(0) scale(1); opacity: 1; }
}

.pz-fab-main {
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 22px 0 0;
  border: 0;
  border-radius: 999px;
  background: var(--pz-accent);
  color: #fff;
  cursor: pointer;
  box-shadow:
    0 18px 40px color-mix(in srgb, var(--pz-accent) 35%, transparent),
    0 4px 12px rgba(0,0,0,0.18);
  transition: transform 0.18s cubic-bezier(0.2, 0.8, 0.3, 1), box-shadow 0.18s, background 0.15s;
  overflow: hidden;
}

.pz-fab-main:hover {
  transform: translateY(-2px);
  background: var(--pz-accent-deep);
  box-shadow:
    0 22px 50px color-mix(in srgb, var(--pz-accent) 45%, transparent),
    0 6px 16px rgba(0,0,0,0.22);
}

.pz-fab-main:active { transform: translateY(0); }

.pz-fab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}

.pz-fab-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  text-align: left;
  font-family: var(--pz-font-body);
}

.pz-fab-label strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.005em;
}

.pz-fab-label em {
  display: block;
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 2px;
  color: color-mix(in srgb, #fff 75%, transparent);
}

.pz-fab-pulse {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: var(--pz-accent);
  z-index: -1;
  animation: pzFabPulse 2.6s ease-out infinite;
}

@keyframes pzFabPulse {
  0%   { transform: scale(1);    opacity: 0.6; }
  100% { transform: scale(1.55); opacity: 0; }
}

.pz-fab-close {
  appearance: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background: var(--pz-card);
  color: var(--pz-muted);
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.18s, transform 0.18s, color 0.15s;
  margin-top: 6px;
}

.pz-signup-fab:hover .pz-fab-close,
.pz-signup-fab:focus-within .pz-fab-close {
  opacity: 1;
  transform: scale(1);
}

.pz-fab-close:hover { color: var(--pz-ink); }

@media (max-width: 720px) {
  .pz-signup-fab { bottom: 16px; right: 16px; }
  .pz-fab-main { padding-right: 0; border-radius: 50%; }
  .pz-fab-label { display: none; }
  .pz-fab-close { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .pz-fab-pulse { animation: none; opacity: 0; }
  .pz-signup-fab { animation: none; }
}
</style>
