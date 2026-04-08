<script setup lang="ts">
import type { CalendarEvent } from '~/server/api/events.get'

const { data: categories } = useDataBlogCategories()
const { data: events } = await useAsyncData('events', () => $fetch<CalendarEvent[]>('/api/events'))

function formatEventDate(iso: string) {
  return new Intl.DateTimeFormat('cs-CZ', {
    weekday: 'short', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit',
  }).format(new Date(iso))
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-linear-to-b from-orange-950/40 to-transparent mt-[calc(-1*var(--ui-header-height))] pt-[calc(var(--ui-header-height)+4rem)] pb-16">
      <UContainer class="text-center">
        <h1 class="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          Jednadvacet
        </h1>
        <p class="text-xl text-gray-400 max-w-xl mx-auto mb-8">
          Neformální síť lokálních bitcoinových komunit v&nbsp;České republice.
        </p>
        <div class="flex flex-wrap gap-3 justify-center">
          <UButton to="/blog" size="xl" color="primary">Číst blog</UButton>
          <UButton to="/brno" size="xl" variant="outline">Najít komunitu</UButton>
        </div>
      </UContainer>
    </section>

    <!-- Mapa + akce -->
    <section class="py-16">
      <UContainer>
        <h2 class="text-2xl font-bold mb-8">Komunity a nejbližší akce</h2>
        <div class="grid lg:grid-cols-5 gap-6">
          <!-- Mapa — placeholder -->
          <div class="lg:col-span-3 h-96 lg:h-[480px] rounded-xl bg-gray-900 flex items-center justify-center text-gray-600 text-sm">
            Mapa komunit
          </div>

          <!-- Akce -->
          <div class="lg:col-span-2 flex flex-col gap-3">
            <template v-if="events?.length">
              <NuxtLink
                v-for="event in events"
                :key="event.start"
                to="/kalendar"
                class="block rounded-xl border border-gray-800 hover:border-primary/50 bg-gray-950/50 hover:bg-gray-900 transition-colors p-4"
              >
                <p class="text-sm text-primary font-medium mb-1">{{ formatEventDate(event.start) }}</p>
                <p class="font-semibold leading-snug">{{ event.title }}</p>
                <p v-if="event.location" class="text-sm text-gray-400 mt-1">
                  <UIcon name="i-lucide-map-pin" class="inline w-3.5 h-3.5 mr-0.5" />{{ event.location }}
                </p>
              </NuxtLink>
            </template>
            <div v-else class="text-gray-500 text-sm">Žádné nadcházející akce.</div>
            <UButton to="/kalendar" variant="ghost" class="mt-auto self-start">
              Zobrazit celý kalendář →
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Blog rozcestník -->
    <section class="py-16 border-t border-gray-800">
      <UContainer>
        <h2 class="text-2xl font-bold mb-8">Blog</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink
            v-for="cat in categories"
            :key="cat.path"
            :to="cat.path"
            class="group rounded-xl border border-gray-800 hover:border-primary/50 bg-gray-950/50 hover:bg-gray-900 transition-colors p-5"
          >
            <p class="font-semibold group-hover:text-primary transition-colors">{{ cat.title }}</p>
          </NuxtLink>
        </div>
        <UButton to="/blog" variant="ghost" class="mt-6">
          Všechny články →
        </UButton>
      </UContainer>
    </section>
  </div>
</template>
