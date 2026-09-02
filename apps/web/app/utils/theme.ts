type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Runs inline in <head> before first paint, so a pinned theme never flashes the
 * system one. Built from the constants below so the two copies cannot drift.
 */
export const THEME_BOOT_SCRIPT = `(()=>{try{const t=localStorage.getItem(${JSON.stringify(
  STORAGE_KEY,
)});if(t==='light'||t==='dark')document.documentElement.style.colorScheme=t}catch(e){}})()`;

function resolved(): Theme {
  const pinned = document.documentElement.style.colorScheme;
  if (pinned === "light" || pinned === "dark") return pinned;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** The OS scheme is the default until the visitor pins one. `color-scheme` on
 * <html> is the single switch: every `light-dark()` token reads it. */
export function toggleTheme() {
  const next: Theme = resolved() === "dark" ? "light" : "dark";
  document.documentElement.style.colorScheme = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Blocked storage: the theme still applies for this page view.
  }
}
