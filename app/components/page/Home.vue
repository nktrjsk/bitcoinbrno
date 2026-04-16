<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-linear-to-b from-orange-950/40 to-transparent mt-[calc(-1*var(--ui-header-height))] pt-[calc(var(--ui-header-height)+5rem)] pb-20">
      <UContainer>
        <div class="max-w-2xl mx-auto text-center">
          <!-- Social proof -->
          <div class="inline-flex items-center gap-2 rounded-full bg-orange-950/60 border border-orange-800/40 px-4 py-1.5 text-sm text-orange-300 mb-8">
            <span class="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Máme už 46 lokálních komunit
          </div>

          <h1 class="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            Bitcoin blíž<br />k tobě
          </h1>

          <p class="text-xl text-gray-400 mb-10">
            Jednadvacet je neformální síť lokálních bitcoinových komunit v&nbsp;České republice. Najdi meetupy, lidi a podniky přijímající bitcoin ve svém městě.
          </p>

          <div class="flex flex-wrap gap-3 justify-center">
            <UButton to="/brno" size="xl" color="primary">Najít komunitu</UButton>
            <UButton to="/blog" size="xl" variant="outline">Číst blog</UButton>
          </div>
        </div>

        <!-- Visual placeholder -->
        <div class="mt-16 rounded-2xl bg-gray-900 border border-gray-800 h-80 flex items-center justify-center text-gray-600 text-sm">
          Mapa komunit
        </div>
      </UContainer>
    </section>
  </div>
</template>
