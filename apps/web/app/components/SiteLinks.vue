<script setup lang="ts">
const { links } = useAppConfig();
</script>

<template>
  <section>
    <h2 class="eyebrow">elsewhere</h2>
    <ul class="links">
      <li v-for="link in links" :key="link.href">
        <NuxtLink class="u" :to="link.href" external >{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
