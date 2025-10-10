<template>
  <div class="min-h-screen bg-slate-300">
    <div class="flex h-screen items-center justify-center">
      <QRCode class="max-w-[18rem]"></QRCode>
    </div>
  </div>
</template>
<script setup lang="ts">
import QRCode from '@/components/QRCode.vue'
</script>
