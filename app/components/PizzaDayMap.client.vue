<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import type { Map } from 'leaflet'

const center: [number, number] = [49.2027853, 16.6030019]
const zoom = 16

const hint = ref(false)
let hintTimer: ReturnType<typeof setTimeout>

function onMapReady(map: Map) {
  map.scrollWheelZoom.disable()

  const container = map.getContainer()

  container.addEventListener('wheel', (e: WheelEvent) => {
    if (e.ctrlKey) {
      map.scrollWheelZoom.enable()
    } else {
      map.scrollWheelZoom.disable()
      hint.value = true
      clearTimeout(hintTimer)
      hintTimer = setTimeout(() => { hint.value = false }, 1800)
    }
  })
}
</script>

<template>
  <div style="position:relative;width:100%;height:100%;">
    <LMap :zoom="zoom" :center="center" :use-global-leaflet="false" style="width:100%;height:100%;" @ready="onMapReady">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <LMarker :lat-lng="center" />
    </LMap>
    <Transition name="hint">
      <div v-if="hint" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:1000;">
        <span style="background:rgba(0,0,0,0.65);color:#fff;padding:8px 16px;border-radius:8px;font-size:13px;font-family:var(--pz-font-mono);">
          Ctrl + scroll pro zoom
        </span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.hint-enter-active, .hint-leave-active { transition: opacity 0.2s; }
.hint-enter-from, .hint-leave-to { opacity: 0; }
</style>
