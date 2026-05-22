<script setup lang="ts">
if (!import.meta.dev) throw createError({ statusCode: 404 })
const { data, refresh, status } = await useFetch('/api/debug/users')
</script>

<template>
  <div class="p-8 font-mono text-sm">
    <div class="flex items-center gap-4 mb-6">
      <h1 class="text-xl font-bold m-0">users ({{ data?.length ?? 0 }})</h1>
      <UButton size="sm" variant="outline" :loading="status === 'pending'" @click="refresh()">Refresh</UButton>
    </div>

    <div v-if="data?.length" class="overflow-x-auto">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="border-b border-gray-300">
            <th class="py-2 pr-6 font-semibold">id</th>
            <th class="py-2 pr-6 font-semibold">email</th>
            <th class="py-2 pr-6 font-semibold">phone</th>
            <th class="py-2 pr-6 font-semibold">pref_lang</th>
            <th class="py-2 font-semibold">created_at</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.id" class="border-b border-gray-100 hover:bg-gray-50">
            <td class="py-2 pr-6 text-gray-500">{{ row.id }}</td>
            <td class="py-2 pr-6">{{ row.email ?? '—' }}</td>
            <td class="py-2 pr-6">{{ row.phone ?? '—' }}</td>
            <td class="py-2 pr-6">{{ row.prefLang }}</td>
            <td class="py-2">{{ row.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="text-gray-500">No rows.</p>
  </div>
</template>
