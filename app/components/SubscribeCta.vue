<script setup lang="ts">
const EVERYWHERE = '__everywhere__'

const { data: communities } = useDataCommunities()

const cityOptions = computed(() => [
  { label: 'Kdekoliv', value: EVERYWHERE },
  ...(communities.value ?? []).map(c => ({ label: c.title, value: c.path })),
])

const eventTypeOptions = [
  { label: 'začátečníky', value: 'beginners' },
  { label: 'pokročilé', value: 'advanced' },
  { label: 'všechny', value: 'all' },
]

const selectedCities = ref<{ label: string; value: string }[]>([])
const selectedType = ref(eventTypeOptions[0])
const email = ref('')
const phone = ref('')

const isEverywhere = computed(() =>
  selectedCities.value.some(c => c.value === EVERYWHERE)
)

// "Kdekoliv" is exclusive: selecting it clears others, selecting a city clears it
watch(selectedCities, (newVal, oldVal) => {
  const hadEverywhere = oldVal.some(c => c.value === EVERYWHERE)
  const hasEverywhere = newVal.some(c => c.value === EVERYWHERE)

  if (!hadEverywhere && hasEverywhere) {
    selectedCities.value = [newVal.find(c => c.value === EVERYWHERE)!]
  } else if (hadEverywhere && hasEverywhere && newVal.length > 1) {
    selectedCities.value = newVal.filter(c => c.value !== EVERYWHERE)
  }
}, { deep: true })

const conjunction = computed(() =>
  email.value.trim() && phone.value.trim() ? 'a' : 'nebo'
)

// Accepts +420 prefix (optional) and 9-digit Czech numbers with optional spaces/dashes
const phoneError = computed(() => {
  const val = phone.value.trim()
  if (!val) return false
  return !/^(\+420[\s-]?)?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/.test(val)
})

const emailError = computed(() => {
  const val = email.value.trim()
  if (!val) return false
  return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
})

const isValid = computed(() =>
  selectedCities.value.length > 0 &&
  (email.value.trim() || phone.value.trim()) &&
  !emailError.value &&
  !phoneError.value
)

function normalizePhone(val: string): string {
  const stripped = val.trim().replace(/[\s-]/g, '')
  if (!stripped) return ''
  return stripped.startsWith('+420') ? stripped : `+420${stripped}`
}

function submit() {
  if (!isValid.value) return
  const payload = {
    email: email.value.trim().toLowerCase() || undefined,
    phone: phone.value ? normalizePhone(phone.value) : undefined,
    communities: selectedCities.value.map(c => c.value),
    category: selectedType.value.value,
  }
  // TODO: wire up backend — payload is normalized and ready
  console.log(payload)
}
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <h2 class="text-3xl font-bold text-center">Aby ti neunikla další akce…</h2>

    <p class="text-xl sm:text-2xl font-medium text-center leading-relaxed flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
      <span>Upozorni mě na akce</span>

      <span v-if="!isEverywhere">v</span>

      <UInputMenu
        v-model="selectedCities"
        :items="cityOptions"
        multiple
        placeholder="kdekoliv…"
        value-key="value"
        :ui="{ base: 'min-w-40 max-w-72' }"
      />

      <span>pro</span>

      <USelect
        v-model="selectedType"
        :items="eventTypeOptions"
        value-key="value"
        :ui="{ base: 'w-auto' }"
      />

      <span>pomocí</span>

      <UInput
        v-model="email"
        type="email"
        placeholder="e-mailu"
        :color="emailError ? 'error' : undefined"
        :highlight="emailError"
        :ui="{ base: 'w-36' }"
      />

      <span>{{ conjunction }}</span>

      <UInput
        v-model="phone"
        type="tel"
        placeholder="telefonu"
        autocomplete="tel"
        :color="phoneError ? 'error' : undefined"
        :highlight="phoneError"
        :ui="{ base: 'w-36' }"
      />

      <span>.</span>
    </p>

    <UButton :disabled="!isValid" size="lg" @click="submit">
      Odebírat
    </UButton>
  </div>
</template>
