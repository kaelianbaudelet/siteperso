<template>
  <SpeedInsights/>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>