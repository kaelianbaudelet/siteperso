<template>
  <SpeedInsights />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>