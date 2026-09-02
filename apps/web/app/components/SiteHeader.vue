<template>
  <header class="header">
    <div class="header__inner measure">
      <NuxtLink to="/" class="brand">bp</NuxtLink>
      <nav class="nav">
        <NuxtLink to="/">index</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
      </nav>
      <button type="button" class="theme" @click="toggleTheme">theme</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  backdrop-filter: blur(10px);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-block: 0.85rem;
}

.brand,
.nav a,
.theme {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  text-decoration: none;
}

.brand {
  color: var(--fg);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--accent);
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  color: var(--muted);
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--fg);
}

.theme {
  margin-left: auto;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  color: var(--muted);
  font: inherit;
  font-size: 0.7rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
}

.theme:hover {
  color: var(--fg);
}
</style>
