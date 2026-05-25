<template>
  <div class="pz">

    <!-- NAV -->
    <nav class="sticky top-0 z-30 border-b border-[var(--pz-rule)] [backdrop-filter:blur(18px)_saturate(140%)] [-webkit-backdrop-filter:blur(18px)_saturate(140%)]" style="background: color-mix(in srgb, var(--pz-bg) 85%, transparent)">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4 sm:gap-6 py-3.5">
        <a href="#top" class="flex items-center gap-3 no-underline [font-family:var(--pz-font-display)] font-bold text-lg tracking-[-0.01em]">
          <img src="/bitcoinbrno.jpg" alt="Bitcoin Brno" class="h-9 w-auto rounded-lg">
          <span>Bitcoin Brno</span>
        </a>
        <div class="hidden md:flex gap-1">
        </div>
        <SocialLinks :links="t.org.links.map(l => l.href)" variant="link" size="lg" />
      </div>
    </nav>

    <!-- HERO (hidden) -->
    <header v-if="false" id="top" class="relative max-w-[1240px] mx-auto px-8 overflow-hidden grid gap-[60px] items-center max-[900px]:grid-cols-1 max-[900px]:pb-[clamp(48px,6vw,80px)]" style="grid-template-columns: 1.3fr 1fr; padding-top: clamp(40px,5vw,64px); padding-bottom: clamp(80px,9vw,140px)">

      <!-- Kids badge -->
      <div class="pz-kids-badge absolute top-6 right-6 w-[124px] h-[124px] flex items-center justify-center z-[5] pointer-events-none max-[900px]:w-[104px] max-[900px]:h-[104px] max-[900px]:top-4 max-[900px]:right-4" :aria-label="`${t.hero.kidsBadge.line1} ${t.hero.kidsBadge.line2} — ${t.hero.kidsBadge.sub}`">
        <svg viewBox="0 0 80 80" class="pz-kids-badge-ring absolute inset-0 w-full h-full text-[var(--pz-ink)]" aria-hidden="true">
          <defs><path id="pz-kb-arc" d="M 40,40 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" /></defs>
          <text font-size="7.6" letter-spacing="1.4" :font-family="'var(--pz-font-mono)'" fill="currentColor">
            <textPath href="#pz-kb-arc" startOffset="0" textLength="201.06" lengthAdjust="spacing"> • {{ t.hero.kidsBadge.sub }} • {{ t.hero.kidsBadge.sub }} </textPath>
          </text>
        </svg>
        <div class="relative w-[92px] h-[92px] rounded-full bg-[var(--pz-accent)] text-white flex flex-col items-center justify-center gap-0.5 max-[900px]:w-[76px] max-[900px]:h-[76px]" style="box-shadow: 0 6px 18px color-mix(in srgb, var(--pz-accent) 35%, transparent)">
          <div class="absolute inset-1 rounded-full border border-dashed border-white/50" />
          <span class="flex -mt-0.5" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
              <circle cx="11" cy="13" r="5.5" fill="currentColor" />
              <circle cx="22" cy="16" r="3.8" fill="currentColor" />
              <path d="M 5 28 C 5 22 8 19 11 19 C 14 19 17 22 17 28 Z" fill="currentColor" />
              <path d="M 18 28 C 18 24 20 22 22 22 C 24 22 26 24 26 28 Z" fill="currentColor" />
              <circle cx="17.5" cy="24.5" r="1.4" fill="var(--pz-card)" />
            </svg>
          </span>
          <span class="flex flex-col items-center [font-family:var(--pz-font-display)] font-bold text-[13px] leading-[1.05] tracking-[-0.01em] uppercase max-[900px]:text-[11px]">
            <strong>{{ t.hero.kidsBadge.line1 }}</strong>
            <strong>{{ t.hero.kidsBadge.line2 }}</strong>
          </span>
        </div>
      </div>

      <!-- Stickers -->
      <span class="pz-sticker pz-sticker--1 absolute [font-family:var(--pz-font-mono)] text-xs tracking-[0.06em] uppercase rounded-[14px] px-[18px] py-3.5 z-[2] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--pz-rule)] bg-[var(--pz-card)]">{{ t.hero.stickers.free }}</span>
      <span class="pz-sticker pz-sticker--2 absolute [font-family:var(--pz-font-mono)] text-xs tracking-[0.06em] uppercase rounded-[14px] px-[18px] py-3.5 z-[2] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--pz-rule)] bg-[var(--pz-card)]">{{ t.hero.stickers.curious }}</span>
      <span class="pz-sticker pz-sticker--3 absolute [font-family:var(--pz-font-mono)] text-xs tracking-[0.06em] uppercase rounded-[14px] px-[18px] py-3.5 z-[2] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[var(--pz-rule)] bg-[var(--pz-card)]">{{ t.hero.stickers.bitcoiners }}</span>

      <!-- Left: content -->
      <div>
        <h1 class="[font-family:var(--pz-font-display)] font-bold leading-[0.88] tracking-[-0.035em] m-0" style="font-size: clamp(56px, 8vw, 120px)">
          <em class="not-italic text-[var(--pz-accent)]">{{ t.hero.title[0] }}</em><br>{{ t.hero.title[1] }}
        </h1>
        <p class="mt-7 text-[var(--pz-ink-soft)] max-w-[52ch] leading-[1.4] m-0" style="font-size: clamp(18px, 2vw, 24px)">{{ t.hero.sub }}</p>
        <div class="mt-11 flex flex-wrap gap-3.5">
          <span class="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[var(--pz-card)] border border-[var(--pz-rule)] rounded-full [font-family:var(--pz-font-mono)] text-[13px] tracking-[0.02em]">
            <svg class="w-4 h-4 opacity-70 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" stroke-linecap="round" /></svg>
            {{ t.hero.time }}
          </span>
          <span class="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[var(--pz-card)] border border-[var(--pz-rule)] rounded-full [font-family:var(--pz-font-mono)] text-[13px] tracking-[0.02em]">
            <svg class="w-4 h-4 opacity-70 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></svg>
            {{ t.hero.place }}
          </span>
        </div>
        <div class="mt-10 flex flex-wrap gap-3 items-center">
          <UButton href="#signup" color="primary" size="lg">{{ t.hero.cta }}</UButton>
          <UButton href="#schedule" variant="outline" color="neutral" size="lg">{{ t.hero.cta2 }} →</UButton>
        </div>
      </div>

      <!-- Right: mark -->
      <div class="flex justify-center items-center">
        <img src="/bitcoinbrno.jpg" alt="Bitcoin Brno" class="w-full max-w-[440px] h-auto object-cover rounded-lg max-[900px]:max-w-[280px]">
      </div>
    </header>

    <!-- EVENTS -->
    <section id="top" class="max-w-[1240px] mx-auto px-4 sm:px-8 py-[clamp(48px,6vw,80px)]">
      <h2 class="[font-family:var(--pz-font-display)] text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.02em] m-0 mb-8">Nadcházející akce v Brně</h2>
      <div v-if="events && events.length" class="flex flex-col gap-4">
        <a
          v-for="ev in events"
          :key="ev.start + ev.title"
          class="group flex gap-6 items-start p-6 bg-[var(--pz-card)] border border-[var(--pz-rule)] rounded-[18px] no-underline hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.09)] transition-[transform,box-shadow]"
        >
          <!-- Date block -->
          <div class="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-[var(--pz-accent)] text-white [font-family:var(--pz-font-mono)]">
            <span class="text-[11px] uppercase tracking-[0.08em] opacity-80 leading-none">{{ new Date(ev.start).toLocaleDateString('cs-CZ', { month: 'short' }) }}</span>
            <span class="text-[22px] font-bold leading-none mt-0.5">{{ new Date(ev.start).getDate() }}</span>
          </div>
          <!-- Details -->
          <div class="flex-1 min-w-0">
            <p class="m-0 [font-family:var(--pz-font-display)] text-[19px] font-semibold tracking-[-0.01em] leading-snug">{{ ev.title }}</p>
            <div class="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[var(--pz-muted)] [font-family:var(--pz-font-mono)] text-[13px]">
              <span v-if="ev.start.includes('T')">
                {{ new Date(ev.start).toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' }) }}
                <template v-if="ev.end && ev.end.includes('T')"> – {{ new Date(ev.end).toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' }) }}</template>
              </span>
              <span v-if="ev.location">{{ ev.location }}</span>
            </div>
          </div>
        </a>
      </div>
      <p v-else class="text-[var(--pz-muted)] [font-family:var(--pz-font-mono)]">Žádné nadcházející akce.</p>
    </section>

    <!-- EXPECT CARDS (hidden) -->
    <section v-if="false" id="expect" class="relative z-[2] pb-[clamp(72px,9vw,128px)]">
      <div class="max-w-[1240px] mx-auto px-8">
        <div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); margin-top: clamp(-110px, -7vw, -70px)">
          <article v-for="card in t.expect.cards" :key="card.n" class="relative p-7 bg-[var(--pz-card)] border border-[var(--pz-rule)] rounded-[18px] flex flex-col gap-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.09)] transition-[transform,box-shadow]">
            <h3 class="[font-family:var(--pz-font-display)] text-[26px] font-semibold tracking-[-0.015em] leading-[1.05] m-0">{{ card.title }}</h3>
            <p class="m-0 text-[var(--pz-ink-soft)] text-[15.5px] leading-[1.5]">{{ card.body }}</p>
            <UBadge variant="soft" color="primary" class="self-start mt-1 [font-family:var(--pz-font-mono)] tracking-[0.06em] uppercase">{{ card.badge }}</UBadge>
          </article>
        </div>
      </div>
    </section>

    <!-- SCHEDULE (hidden) -->
    <section v-if="false" id="schedule" class="py-[clamp(72px,9vw,128px)] border-t border-[var(--pz-rule)] bg-[var(--pz-bg-tint)]">
      <div class="max-w-[1240px] mx-auto px-8">
        <div class="grid gap-4 mb-[clamp(36px,5vw,64px)] max-w-[760px]">
          <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase text-[var(--pz-muted)]">{{ t.schedule.eyebrow }}</span>
          <h2 class="[font-family:var(--pz-font-display)] font-semibold tracking-[-0.02em] leading-[1.02] m-0 text-balance" style="font-size: clamp(28px,4.4vw,52px)">{{ t.schedule.head }}</h2>
          <p class="text-[var(--pz-ink-soft)] max-w-[56ch] m-0" style="font-size: clamp(17px,1.6vw,21px)">{{ t.schedule.lede }}</p>
        </div>
        <div class="max-w-[880px] border-t border-[var(--pz-rule)]">
          <div v-for="row in t.schedule.rows" :key="row.t" class="grid gap-6 py-5 px-1 border-b border-[var(--pz-rule)] items-baseline hover:bg-[color-mix(in_srgb,var(--pz-accent-soft)_30%,transparent)] transition-colors max-sm:grid-cols-1 max-sm:gap-1 max-sm:py-4" style="grid-template-columns: 110px 1fr auto">
            <span class="[font-family:var(--pz-font-mono)] text-[17px] font-medium text-[var(--pz-accent-deep)] tabular-nums">{{ row.t }}</span>
            <span class="[font-family:var(--pz-font-display)] text-[21px] font-semibold tracking-[-0.01em] leading-snug">
              {{ row.title }}
              <small class="block [font-family:var(--pz-font-body)] text-[14.5px] font-normal text-[var(--pz-muted)] mt-1 tracking-normal">{{ row.sub }}</small>
            </span>
            <span class="[font-family:var(--pz-font-mono)] text-[11px] tracking-[0.08em] uppercase text-[var(--pz-muted)] whitespace-nowrap max-sm:order-first">{{ row.tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- BRING (hidden) -->
    <section v-if="false" id="bring" class="py-[clamp(72px,9vw,128px)] border-t border-[var(--pz-rule)]">
      <div class="max-w-[1240px] mx-auto px-8">
        <div class="grid gap-4 mb-[clamp(36px,5vw,64px)] max-w-[760px]">
          <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase text-[var(--pz-muted)]">{{ t.bring.eyebrow }}</span>
          <h2 class="[font-family:var(--pz-font-display)] font-semibold tracking-[-0.02em] leading-[1.02] m-0 text-balance" style="font-size: clamp(28px,4.4vw,52px)">{{ t.bring.head }}</h2>
          <p class="text-[var(--pz-ink-soft)] max-w-[56ch] m-0" style="font-size: clamp(17px,1.6vw,21px)">{{ t.bring.lede }}</p>
        </div>
        <div class="grid border border-[var(--pz-rule)] rounded-3xl overflow-hidden bg-[var(--pz-card)] max-[720px]:grid-cols-1" style="grid-template-columns: 1fr 1fr">
          <div class="p-9">
            <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase text-[var(--pz-muted)]">01</span>
            <h3 class="[font-family:var(--pz-font-display)] text-[22px] font-semibold tracking-[-0.01em] m-0 mt-1 mb-1">{{ t.bring.we.title }}</h3>
            <ul class="list-none p-0 m-0 mt-4 flex flex-col gap-2.5">
              <li v-for="(item, i) in t.bring.we.items" :key="i" class="flex items-start gap-3.5 text-base leading-snug">
                <span class="shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-[var(--pz-accent)]" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="p-9 bg-[var(--pz-bg-tint)] max-[720px]:border-t" style="border-left: 1px solid var(--pz-rule)">
            <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase text-[var(--pz-muted)]">02</span>
            <h3 class="[font-family:var(--pz-font-display)] text-[22px] font-semibold tracking-[-0.01em] m-0 mt-1 mb-1">{{ t.bring.you.title }}</h3>
            <ul class="list-none p-0 m-0 mt-4 flex flex-col gap-2.5">
              <li v-for="(item, i) in t.bring.you.items" :key="i" class="flex items-start gap-3.5 text-base leading-snug">
                <span class="shrink-0 mt-1 w-2.5 h-2.5 rounded-full bg-[var(--pz-secondary)]" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- GETTING THERE (hidden) -->
    <section v-if="false" id="getting" class="py-[clamp(72px,9vw,128px)] border-t border-[var(--pz-rule)] bg-[var(--pz-bg-tint)]">
      <div class="max-w-[1240px] mx-auto px-8">
        <div class="grid gap-4 mb-[clamp(36px,5vw,64px)] max-w-[760px]">
          <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase text-[var(--pz-muted)]">{{ t.getting.eyebrow }}</span>
          <h2 class="[font-family:var(--pz-font-display)] font-semibold tracking-[-0.02em] leading-[1.02] m-0 text-balance" style="font-size: clamp(28px,4.4vw,52px)">{{ t.getting.head }}</h2>
          <p class="text-[var(--pz-ink-soft)] max-w-[56ch] m-0" style="font-size: clamp(17px,1.6vw,21px)" v-html="t.getting.lede" />
        </div>
        <div class="grid gap-10 items-start max-[900px]:grid-cols-1" style="grid-template-columns: 1.1fr 1fr">
          <div class="flex flex-col gap-4">
            <div v-for="(row, i) in t.getting.rows" :key="i" class="grid gap-4 items-start py-4 border-b border-[var(--pz-rule)] last:border-0" style="grid-template-columns: 44px 1fr">
              <span class="w-9 h-9 flex items-center justify-center rounded-[10px] bg-[var(--pz-bg)] text-[var(--pz-accent-deep)]">
                <svg class="w-[22px] h-[22px]" viewBox="0 0 24 24" v-html="transitIcons[row.ico]" />
              </span>
              <div>
                <h4 class="m-0 mb-1 [font-family:var(--pz-font-display)] text-[18px] font-semibold tracking-[-0.005em]">{{ row.title }}</h4>
                <p class="m-0 text-[var(--pz-ink-soft)] text-[15px] leading-relaxed" v-html="row.body.replace(/<em>/g, '<span class=\'pz-line\'>').replace(/<\/em>/g, '</span>')" />
              </div>
            </div>
          </div>
          <aside class="bg-[var(--pz-card)] border border-[var(--pz-rule)] rounded-[20px] overflow-hidden sticky top-[100px] max-[900px]:static">
            <div class="relative aspect-[4/3] border-b border-[var(--pz-rule)] overflow-hidden">
              <PizzaDayMap />
            </div>
            <div class="px-[22px] py-4 flex justify-between gap-4 items-center">
              <span class="[font-family:var(--pz-font-display)] font-semibold text-[17px]">{{ t.getting.park.name }}</span>
              <span class="[font-family:var(--pz-font-mono)] text-[12px] text-[var(--pz-muted)]">{{ t.getting.park.coord }}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- FAQ (hidden) -->
    <section v-if="false" id="faq" class="py-[clamp(72px,9vw,128px)] border-t border-[var(--pz-rule)]">
      <div class="max-w-[1240px] mx-auto px-8">
        <div class="grid gap-4 mb-[clamp(36px,5vw,64px)] max-w-[760px]">
          <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase text-[var(--pz-muted)]">{{ t.faq.eyebrow }}</span>
          <h2 class="[font-family:var(--pz-font-display)] font-semibold tracking-[-0.02em] leading-[1.02] m-0 text-balance" style="font-size: clamp(28px,4.4vw,52px)">{{ t.faq.head }}</h2>
          <p class="text-[var(--pz-ink-soft)] max-w-[56ch] m-0" style="font-size: clamp(17px,1.6vw,21px)">{{ t.faq.lede }}</p>
        </div>
        <UAccordion :key="lang" :items="faqItems" default-value="0" class="max-w-[880px]" />
      </div>
    </section>

    <!-- ORGANIZERS (hidden) -->
    <section v-if="false" id="org" class="py-[clamp(72px,9vw,128px)] border-t border-[var(--pz-rule)] bg-[var(--pz-bg-tint)]">
      <div class="max-w-[1240px] mx-auto px-8">
        <div class="grid gap-4 mb-[clamp(36px,5vw,64px)] max-w-[760px]">
          <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase text-[var(--pz-muted)]">{{ t.org.eyebrow }}</span>
          <h2 class="[font-family:var(--pz-font-display)] font-semibold tracking-[-0.02em] leading-[1.02] m-0 text-balance" style="font-size: clamp(28px,4.4vw,52px)">{{ t.org.head }}</h2>
        </div>
        <div class="grid border border-[var(--pz-rule)] rounded-3xl overflow-hidden bg-[var(--pz-card)] max-[760px]:grid-cols-1" style="grid-template-columns: 1fr 1fr">
          <div class="p-10">
            <h3 class="[font-family:var(--pz-font-display)] font-semibold tracking-[-0.015em] leading-[1.05] m-0 mt-2 mb-4" style="font-size: clamp(26px,3vw,36px)">{{ t.org.cta }}</h3>
            <p class="m-0 mb-4 text-[var(--pz-ink-soft)] text-[16.5px] leading-relaxed">{{ t.org.lede }}</p>
            <div class="flex flex-wrap gap-2.5 mt-5">
              <UButton v-for="link in t.org.links" :key="link.label" :href="link.href" target="_blank" rel="noopener" variant="outline" color="neutral" size="sm">{{ link.label }}</UButton>
            </div>
          </div>
          <div class="bg-[var(--pz-bg-tint)] relative min-h-[280px] overflow-hidden max-[760px]:min-h-[200px]">
            <img src="/jednadvacetbrno.jpg" alt="Jednadvacet Brno community" class="w-full h-full object-cover block" />
          </div>
        </div>
      </div>
    </section>

    <!-- SIGNUP SECTION -->
    <section id="signup" class="py-[clamp(40px,9vw,128px)] border-t border-[var(--pz-rule)]">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div class="pz-signup relative bg-[var(--pz-ink)] text-[var(--pz-bg)] rounded-[20px] sm:rounded-[28px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center overflow-hidden p-6 sm:p-10 lg:p-16">
          <!-- Head -->
          <div>
            <span class="[font-family:var(--pz-font-mono)] text-[12px] tracking-[0.14em] uppercase block mb-3" style="color: color-mix(in srgb, var(--pz-bg) 60%, transparent)">{{ t.signup.eyebrow }}</span>
            <h3 class="[font-family:var(--pz-font-display)] font-bold tracking-[-0.025em] leading-none m-0 mb-3.5 text-balance" style="font-size: clamp(30px,3.6vw,48px)">
              {{ t.signup.head.split(t.signup.headAccent)[0] }}<span class="text-[var(--pz-accent)]">{{ t.signup.headAccent }}</span>{{ t.signup.head.split(t.signup.headAccent)[1] }}
            </h3>
            <p class="m-0 text-[16.5px] leading-relaxed max-w-[36ch]" style="color: color-mix(in srgb, var(--pz-bg) 75%, transparent)">{{ t.signup.lede }}</p>
          </div>

          <!-- Success -->
          <div v-if="emailDone" class="p-8 rounded-[18px]" style="background: color-mix(in srgb, var(--pz-bg) 10%, transparent); border: 1px solid color-mix(in srgb, var(--pz-bg) 18%, transparent)">
            <h4 class="[font-family:var(--pz-font-display)] text-[22px] font-semibold m-0 mb-2">{{ t.signup.success }}</h4>
            <p class="m-0 text-[15px]" style="color: color-mix(in srgb, var(--pz-bg) 75%, transparent)">{{ t.signup.successSub }}</p>
          </div>

          <!-- Form -->
          <form v-else class="relative z-[1] flex flex-col gap-3" @submit.prevent="submitSignup">
            <div class="flex flex-col gap-1.5">
              <label for="pz-contact" class="[font-family:var(--pz-font-mono)] text-[11px] tracking-[0.1em] uppercase" style="color: color-mix(in srgb, var(--pz-bg) 60%, transparent)">{{ t.signup.emailLabel }} / {{ t.signup.phoneLabel }}</label>
              <UInput
                id="pz-contact"
                v-model="contact"
                type="text"
                inputmode="email"
                autocomplete="email"
                :placeholder="lang === 'cs' ? 'tvoje@adresa.cz nebo +420 …' : 'you@example.com or +420 …'"
                :color="contactError ? 'error' : 'primary'"
                :highlight="contactError"
              />
              <span v-if="contactError" class="text-[12.5px] text-red-400">{{ lang === 'cs' ? 'Zadej platné české číslo (+420 nebo 9 číslic)' : 'Enter a valid Czech number (+420 or 9 digits)' }}</span>
            </div>

            <div v-if="false" class="flex flex-col gap-1.5">
              <label class="[font-family:var(--pz-font-mono)] text-[11px] tracking-[0.1em] uppercase" style="color: color-mix(in srgb, var(--pz-bg) 60%, transparent)">{{ t.signup.langLabel }}</label>
              <div class="flex gap-2 p-1 rounded-xl" style="background: color-mix(in srgb, var(--pz-bg) 8%, transparent); border: 1px solid color-mix(in srgb, var(--pz-bg) 16%, transparent)">
                <UButton type="button" :color="prefLang === 'cs' ? 'primary' : 'neutral'" :variant="prefLang === 'cs' ? 'solid' : 'ghost'" class="flex-1" @click="prefLang = 'cs'">Česky</UButton>
                <UButton type="button" :color="prefLang === 'en' ? 'primary' : 'neutral'" :variant="prefLang === 'en' ? 'solid' : 'ghost'" class="flex-1" @click="prefLang = 'en'">English</UButton>
              </div>
            </div>

            <p v-if="signupError" class="m-0 mb-1 text-[13px] text-red-400">{{ signupError }}</p>

            <UButton type="submit" color="primary" block size="lg" :disabled="!contact.trim() || detectedType === 'unknown' || contactError" class="mt-2">{{ t.signup.submit }}</UButton>
            <p class="m-0 mt-1.5 text-[12.5px] leading-relaxed" style="color: color-mix(in srgb, var(--pz-bg) 50%, transparent)">{{ t.signup.fine }}</p>
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-12 border-t border-[var(--pz-rule)] text-[13.5px] text-[var(--pz-muted)]">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-8 flex justify-between gap-6 flex-wrap items-baseline">
        <a href="#top" class="flex items-center gap-3 [font-family:var(--pz-font-display)] font-bold text-[15px] no-underline text-[var(--pz-ink)]">
          <img src="/bitcoinbrno.jpg" alt="Bitcoin Brno" class="h-7 w-auto rounded-lg">
          <span>{{ t.footer.rights }}</span>
        </a>
        <div class="flex gap-2">
          <UButton v-for="link in t.footer.links" :key="link.label" :href="link.href" variant="link" color="neutral" size="sm">{{ link.label }}</UButton>
        </div>
      </div>
    </footer>

    <!-- FAB -->
    <div v-if="!fabDismissed" class="pz-signup-fab fixed bottom-[22px] right-[22px] z-[25] flex items-start gap-1.5 max-[720px]:bottom-4 max-[720px]:right-4">
      <button type="button" class="pz-fab-close w-7 h-7 rounded-full border-0 bg-[var(--pz-card)] text-[var(--pz-muted)] text-[13px] leading-none cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.12)] opacity-0 scale-[0.6] transition-[opacity,transform,color] mt-1.5 hover:text-[var(--pz-ink)] max-[720px]:opacity-100 max-[720px]:scale-100" @click="fabDismissed = true" aria-label="Dismiss">✕</button>
      <button type="button" class="relative flex items-center h-16 pr-[22px] border-0 rounded-full bg-[var(--pz-accent)] text-white cursor-pointer overflow-hidden transition-[transform,box-shadow,background] hover:-translate-y-0.5 hover:bg-[var(--pz-accent-deep)] active:translate-y-0 max-[720px]:pr-0 max-[720px]:rounded-full" :aria-label="t.fab.label" style="box-shadow: 0 18px 40px color-mix(in srgb, var(--pz-accent) 35%, transparent), 0 4px 12px rgba(0,0,0,0.18)" @click="goToSignup">
        <span class="pz-fab-pulse absolute inset-0 rounded-full bg-[var(--pz-accent)] -z-[1]" aria-hidden="true" />
        <span class="flex items-center justify-center w-16 h-16 shrink-0" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 7l9 6 9-6" /><rect x="3" y="5" width="18" height="14" rx="2" />
          </svg>
        </span>
        <span class="[font-family:var(--pz-font-body)] flex flex-col justify-center whitespace-nowrap text-left max-[720px]:hidden" aria-hidden="true">
          <strong class="block text-[14px] font-bold leading-[1.1] tracking-[-0.005em]">{{ t.fab.label }}</strong>
          <em class="block not-italic text-[12px] font-medium leading-[1.2] mt-0.5" style="color: color-mix(in srgb, #fff 75%, transparent)">{{ t.fab.sub }}</em>
        </span>
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bitcoin Brno',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap',
    },
  ],
})

import type { CalendarEvent } from '~/server/api/events.get'

const { data: events } = await useFetch<CalendarEvent[]>('/api/events')

const lang = ref<'cs' | 'en'>('cs')
const fabDismissed = ref(false)
const prefLang = ref<'cs' | 'en'>('cs')
const emailDone = ref(false)
const signupError = ref('')
const contact = ref('')

// TODO: replace with exact detection logic when disclosed
type ContactType = 'email' | 'phone' | 'unknown'
const detectedType = computed<ContactType>(() => {
  const val = contact.value.trim()
  if (!val) return 'unknown'
  if (val.includes('@')) return 'email'
  if (/^[+0-9]/.test(val)) return 'phone'
  return 'unknown'
})

const contactError = computed(() => {
  if (detectedType.value !== 'phone') return false
  const val = contact.value.trim()
  return !/^(\+420[\s-]?)?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/.test(val)
})

function normalizePhone(val: string): string {
  const stripped = val.trim().replace(/[\s-]/g, '')
  if (!stripped) return ''
  return stripped.startsWith('+420') ? stripped : `+420${stripped}`
}

async function submitSignup() {
  signupError.value = ''
  if (!contact.value.trim() || detectedType.value === 'unknown') return
  if (contactError.value) return
  const isPhone = detectedType.value === 'phone'
  try {
    await $fetch('/api/pizzaday/signup', {
      method: 'POST',
      body: {
        email: isPhone ? '' : contact.value.trim().toLowerCase(),
        phone: isPhone ? normalizePhone(contact.value) : '',
        prefLang: prefLang.value,
      },
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
  setTimeout(() => (document.getElementById('pz-contact') as HTMLInputElement)?.focus(), 600)
}

const transitIcons: Record<string, string> = {
  tram: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="14" rx="2.5"/><circle cx="9" cy="14" r="1.2"/><circle cx="15" cy="14" r="1.2"/><path d="M5 9h14"/><path d="M8 21l1.5-3M16 21l-1.5-3"/></g>`,
  walk: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M9 22l3-7-3-3 2-5 4 3 3 1"/><path d="M9 14l-2 4"/></g>`,
  bike: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="17" r="4"/><circle cx="18" cy="17" r="4"/><path d="M6 17l4-7h5l3 7M10 10l3 7"/><circle cx="15" cy="5" r="1.2" fill="currentColor"/></g>`,
  car:  `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-3l2-4h12l2 4v3"/><rect x="3" y="13" width="18" height="5" rx="1.5"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/></g>`,
}

const copy = {
  cs: {
    nav: { what: 'Co tě čeká', schedule: 'Program', getting: 'Jak se tam dostat', faq: 'Časté dotazy', signup: 'Přihlášení k notifikacím' },
    hero: {
      title: ['Pizza Day', 'v parku'],
      sub: 'Pizza, park a parta lidí, kteří ti rádi vysvětlí, co je Bitcoin — beze spěchu a bez žargonu. Přijď s rodinou, dětmi, i když se nezajímáš o bitcoin. Stačí mít hlad.',
      time: 'Ne 24. května · 15:00',
      place: 'Tyršův sad',
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
        { n: '04', title: 'Merch & komunita', badge: 'Plať korunami nebo saty', body: 'Tričko, samolepky, propojení s místní komunitou. Výtěžek jde na další akce.' },
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
      head: 'Co máme / co si vezmi', eyebrow: 'Info',
      lede: 'Akce je pod širým nebem. Připrav se na piknikový režim.',
      we:  { title: 'Připravíme', items: ['Pizzu (dokud máme)', 'Nealko', 'Bitcoinery, co rádi vysvětlují', 'Stínovou plachtu', 'Dětský koutek s křídami'] },
      you: { title: 'Vezmi si s sebou', items: ['Deku nebo karimatku', 'Telefon, nebo i Trezor (pokud chceš pomoct s nastavením peněženky)', 'Opalovací krém', 'Lahev na vodu', 'Děti, kamarády, klidně i psa'] },
    },
    getting: {
      head: 'Jak se tam dostat', eyebrow: 'Doprava',
      lede: 'Park leží kousek od centra. <b>Doporučujeme MHD nebo kolo</b>, parkování v okolí je omezené.',
      rows: [
        { ico: 'tram', title: 'Tramvají', body: 'Linky <em>1</em>, <em>6</em> · zastávka <b>Antonínská</b>. Odtud je to pár minut pěšky do parku.' },
        { ico: 'walk', title: 'Pěšky z centra', body: 'Z náměstí Svobody přibližně <b>20</b> minut, z Moravského náměstí <b>10</b> minut.' },
        { ico: 'bike', title: 'Na kole', body: 'TBD' },
        { ico: 'car',  title: 'Autem', body: 'Parkování v okolí <b>omezené</b> (modrá zóna). V blízkosti je <b>Parkovací dům Rozmarýn</b>.' },
      ],
      park: { name: 'Tyršův sad', coord: '49.2028° N · 16.6030° E' },
    },
    faq: {
      head: 'Časté dotazy', eyebrow: 'FAQ',
      lede: 'Co se nejčastěji ptáte. Pokud něco chybí, napiš nám.',
      rows: [
        { q: 'Musím o Bitcoinu něco vědět?', a: 'Vůbec nic. Akce je primárně pro lidi, kteří o tom nikdy neslyšeli nebo se za to stydí ptát. Žádná hloupá otázka neexistuje.' },
        { q: 'Je pizza opravdu zdarma?', a: 'Ano. Pizza je placená z příspěvků místní komunity. Bereme to jako pohoštění pro každého, kdo přijde. Když nám dojde, doobjednáme — dokud finance stačí.' },
        { q: 'Je akce vhodná pro děti?', a: 'Ano, je to rodinná akce. V parku je dětské hřiště (+ ještě něco?)' },
        { q: 'Co když bude pršet?', a: 'Pokud bude lehký déšť, schováme se pod stromy a stínovou plachtu. Pokud přijde bouřka, akci přesuneme — informace pošleme do newsletteru ráno před akcí.' },
        { q: 'Můžu platit Bitcoinem za merch?', a: 'Ano, přijímáme Lightning i hotovost (CZK). Karty bohužel ne — jsme v parku.' },
        { q: 'Musím se předem registrovat?', a: 'Ne. Stačí přijít. Pokud se chceš dozvědět o dalších akcích, přihlas se k odběru novinek.' },
        { q: 'Mluví se česky, nebo anglicky?', a: 'Oboje. Většina bitcoinerů mluví česky i anglicky, najdeš lidi, se kterými si rozumíš.' },
      ],
    },
    org: {
      head: 'Kdo to pořádá', eyebrow: 'Organizátoři',
      lede: 'Pizza Day Brno pořádá místní bitcoinová komunita — parta dobrovolníků, kteří se scházejí každé druhé pondělí (Bitcoin Beer) a rádi sdílejí, co se dozvěděli, nebo si jen tak povídají o čemkoliv. Nejsme banda finančních poradců a investorů, jsme normální lidi.',
      cta: 'Připoj se do skupiny',
      links: [
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590066953535' },
        { label: 'Instagram', href: 'https://www.instagram.com/bitcoinbrno/' },
        { label: 'Signal', href: 'https://signal.group/#CjQKIL2KyHPPAotCRX1bQS2Kx_NV46s7om25K23Sy5Sf_u2pEhB1vJrPckxkIryjgdeTybmx' },
      ],
    },
    signup: {
      head: 'Buď u dalších akcí', headAccent: 'dalších akcí', eyebrow: 'Pozvánky',
      lede: 'Pošleme ti upozornění o nových akcích. Nespamujeme.',
      emailLabel: 'E-mail', emailPh: 'tvoje@adresa.cz',
      phoneLabel: 'Telefon / SMS', phonePh: '+420',
      contactHint: 'Vyplň aspoň jedno z polí výše.',
      langLabel: 'Preferovaný jazyk',
      submit: 'Přihlásit se',
      fine: 'Odhlásit se můžeš jedním klikem. Údaje neposkytujeme třetím stranám.',
      success: 'Hotovo!',
      successSub: 'Dáme ti vědět, jakmile se něco bude chystat.',
    },
    fab: { label: 'Pozvánky do mailu/mobilu', sub: 'Dozvíš se, kdy bude další akce' },
    footer: {
      rights: 'Bitcoin Brno',
      links: [],
    },
  },
  en: {
    nav: { what: 'What to expect', schedule: 'Schedule', getting: 'Getting there', faq: 'FAQ', signup: 'Newsletter' },
    hero: {
      title: ['Pizza Day', 'in the park'],
      sub: 'Free pizza, sunshine on the grass, and a bunch of friendly people who will gladly explain Bitcoin — no rush, no jargon. Bring your family, your kids, your curiosity. Or just your appetite.',
      time: 'Sat 22 May · 13:00–18:00',
      place: 'Tyršův sad · meadow by the music pavilion',
      cta: 'Get the newsletter',
      cta2: "See what's on",
      stickers: { free: 'Pizza on us', curious: 'Beginners welcome', bitcoiners: 'Park · under a tree' },
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
        { ico: 'tram', title: 'By tram', body: 'Lines <em>1</em>, <em>6</em> · stop Tyršův sad. Then 3 minutes on foot into the park.' },
        { ico: 'walk', title: 'On foot from the center', body: 'About 15 minutes northeast from Náměstí Svobody.' },
        { ico: 'bike', title: 'By bike', body: 'Bike racks at the main park entrance, next to the pavilion.' },
        { ico: 'car',  title: 'By car', body: 'Limited paid parking (blue zone) nearby. P+R Stará osada + tram is easier.' },
      ],
      park: { name: 'Tyršův sad · pavilion', coord: '49.2028° N · 16.6030° E' },
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
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590066953535' },
        { label: 'Instagram', href: 'https://www.instagram.com/bitcoinbrno/' },
        { label: 'Signal', href: 'https://signal.group/#CjQKIL2KyHPPAotCRX1bQS2Kx_NV46s7om25K23Sy5Sf_u2pEhB1vJrPckxkIryjgdeTybmx' },
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
      success: "Done!",
      successSub: "We'll let you know when something's coming up.",
    },
    fab: { label: 'Newsletter', sub: 'Hear when the next one happens' },
    footer: {
      rights: 'Bitcoin Brno · community event',
      links: [],
    },
  },
}

const t = computed(() => copy[lang.value])

const faqItems = computed(() =>
  t.value.faq.rows.map((row, i) => ({
    label: row.q,
    content: row.a,
    value: String(i),
  }))
)
</script>

<style>
/* ── Pizza Day Brno — design tokens ──────────────────────────────── */
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

/* ── Kids badge ───────────────────────────────────────────────── */
.pz-kids-badge      { animation: pzKidsBadgeIn 0.7s cubic-bezier(0.2, 1.4, 0.4, 1) 0.2s both; transform: rotate(8deg); }
.pz-kids-badge-ring { animation: pzKidsRingSpin 22s linear infinite; }

@keyframes pzKidsBadgeIn {
  from { transform: rotate(-25deg) scale(0.3); opacity: 0; }
  to   { transform: rotate(8deg) scale(1); opacity: 1; }
}
@keyframes pzKidsRingSpin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .pz-kids-badge      { animation: none; transform: rotate(8deg); }
  .pz-kids-badge-ring { animation: none; }
}

/* ── Sticker positions ────────────────────────────────────────── */
.pz-sticker--1 { top: 7%;    right: 34%; background: var(--pz-accent); color: #fff; border-color: transparent; font-size: 14px; padding: 18px 22px; transform: rotate(6deg); }
.pz-sticker--2 { top: 48%;   right: 26%; transform: rotate(-4deg); }
.pz-sticker--3 { bottom: 20%;right: 5%;  transform: rotate(5deg); }
@media (max-width: 900px) { .pz-sticker { display: none; } }

/* ── Signup blob ─────────────────────────────────────────────── */
.pz-signup::before {
  content: "";
  position: absolute;
  width: 380px; height: 380px; border-radius: 50%;
  background: var(--pz-accent); opacity: 0.18;
  right: -120px; top: -120px; filter: blur(2px); pointer-events: none;
}

/* ── FAB ─────────────────────────────────────────────────────── */
.pz-signup-fab { animation: pzFabIn 0.5s cubic-bezier(0.2, 0.8, 0.3, 1) 0.4s both; }
.pz-fab-pulse  { animation: pzFabPulse 2.6s ease-out infinite; }

@keyframes pzFabIn {
  from { transform: translateY(80px) scale(0.6); opacity: 0; }
  to   { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes pzFabPulse {
  0%   { transform: scale(1);    opacity: 0.6; }
  100% { transform: scale(1.55); opacity: 0; }
}

.pz-signup-fab:hover .pz-fab-close,
.pz-signup-fab:focus-within .pz-fab-close { opacity: 1; transform: scale(1); }

@media (prefers-reduced-motion: reduce) {
  .pz-fab-pulse  { animation: none; opacity: 0; }
  .pz-signup-fab { animation: none; }
}

/* ── Tram line badges (v-html) ───────────────────────────────── */
.pz-line {
  display: inline-block;
  font-family: var(--pz-font-mono); font-size: 12px;
  background: var(--pz-accent); color: #fff;
  padding: 2px 7px; border-radius: 4px; margin-right: 4px; letter-spacing: 0.04em;
}
</style>
