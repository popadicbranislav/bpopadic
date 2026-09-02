<script setup lang="ts">
useHead({ title: "about" });
</script>

<template>
  <div>
    <h1>about</h1>

    <p class="body">
      I'm a software engineer and I build web applications, mostly in Vue and TypeScript.
      I've spent most of my career in a corporate environment working on all
      sorts of things — more recently tinkering with maps and geospatial systems.
    </p>
    <p class="body">
      Away from the keyboard I'm a husband of a beautiful wife and a father of
      three amazing children. I like to build things, garden, read, and get out and explore the world.
    </p>

    <hr class="tick" />

    <section>
      <h2 class="eyebrow">now</h2>
      <p class="body">
        Currently rebuilding this site from the ground up and I am working on a
        play house for my kids.
      </p>
    </section>

    <hr class="tick" />

    <SiteLinks />
  </div>
</template>

<style scoped>
.body {
  margin: 0 0 1rem;
  color: var(--muted);
}
</style>
