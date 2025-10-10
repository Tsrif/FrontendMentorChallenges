<template>
  <div class="w-full border-slate-200/60">
    <div class="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
      <select
        id="component-picker"
        v-model="selectedPath"
        @change="go"
        class="block w-60 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
      >
        <option disabled value="">Select…</option>
        <option v-for="opt in options" :key="opt.path" :value="opt.path">
          {{ opt.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const options = [{ label: 'QR Component', path: '/qr-code' }]

const selectedPath = ref<string>('')

watchEffect(() => {
  const match = options.find(o => o.path === route.path)
  selectedPath.value = match ? match.path : ''
})

function go() {
  if (!selectedPath.value || selectedPath.value === route.path) return
  router.push(selectedPath.value)
}
</script>
