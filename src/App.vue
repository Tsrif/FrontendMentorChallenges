<template>
  <div class="min-h-screen bg-slate-300 flex flex-col">
    <header class="flex border-b border-slate-200/60 bg-white/70">
      <div class="mx-auto max-w-5xl px-4 py-3 justify-center items-center">
        <ComponentPicker />
      </div>
    </header>

    <main class="flex-1 grid place-items-center p-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import ComponentPicker from '@/components/ComponentPicker.vue'
</script>
