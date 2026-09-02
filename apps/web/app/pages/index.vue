<template>
  <div>
    <h1>hi!</h1>
    <p class="lede">
      I'm Branislav Popadič, or Braňo (/braɲo/). Welcome to my website.
      <br />
      More about me <NuxtLink to="/about" class="u">here</NuxtLink>.
    </p>

    <blockquote
      class="quote"
      cite="http://bokardo.com/archives/the-shaker-design-philosophy/"
    >
      Don’t make something unless it is both necessary and useful; but if it is
      both necessary and useful, don’t hesitate to make it beautiful.
    </blockquote>

    <hr class="tick" />

    <section>
      <h2 class="eyebrow">projects</h2>
      <p class="empty">{ nothing here yet }</p>
    </section>

    <hr class="tick" />

    <SiteLinks />
  </div>
</template>

<style scoped>
.lede {
  margin: 0;
  color: var(--muted);
}

.quote {
  margin-inline: 0;
  margin-block: 3.5rem;
  font-style: italic;
  color: var(--faint);
  padding-left: 0.9rem;
  position: relative;
  isolation: isolate;
}

.quote::before {
  content: "\201C";
  position: absolute;
  left: -0.25rem;
  top: -0.28em;
  z-index: -1;
  font-size: 6em;
  line-height: 1;
  font-style: normal;
  color: var(--muted);
  opacity: 0.18;
  user-select: none;
  pointer-events: none;
}

.empty {
  margin: 0;
  color: var(--muted);
  opacity: 0.6;
}
</style>
