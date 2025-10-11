<template>
  <div class="max-w-[18rem]">
    <div class="flex items-center justify-center">
      <article class="bg-white rounded-2xl shadow-sm w-full p-4 text-center space-y-4">
        <img :src="qrCode" alt="QR code" class="rounded-xl w-full" />

        <h1 class="font-outfit font-bold text-preset1 text-slate-800">
          Improve your front-end skills by building projects
        </h1>

        <p class="font-outfit font-normal text-preset2 tracking-tightest text-slate-500 pb-5">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import qrCode from '@/assets/image-qr-code.png'
</script>
