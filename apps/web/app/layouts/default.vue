<template>
  <div>
    <SiteHeader />
    <main class="measure main">
      <slot />
    </main>
    <footer class="measure foot">
      <span class="eyebrow">bpopadic.dev</span>
    </footer>
  </div>
</template>

<style scoped>
.main {
  padding-block: 3vw 0;
}

.foot {
  padding-block: 4rem 3rem;
  opacity: 0.6;
}
</style>
