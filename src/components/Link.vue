<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="text-blue-600 underline hover:text-blue-800 transition-colors"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>()
</script>
