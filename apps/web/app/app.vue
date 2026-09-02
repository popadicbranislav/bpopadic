<script setup lang="ts">
// Lives here rather than in nuxt.config, whose head must stay serializable.
useHead({
  titleTemplate: (title) =>
    title ? `bp - ${title}` : "bp",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
