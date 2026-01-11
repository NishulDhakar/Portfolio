"use client";

/**
 * This script prevents the flash of white screen when loading the page in dark mode.
 * It runs before the page renders to apply the correct theme immediately.
 */
export function ThemeScript() {
    const themeScript = `
    (function() {
      function getThemePreference() {
        if (typeof localStorage !== 'undefined') {
          const stored = localStorage.getItem('theme');
          if (stored) {
            return stored;
          }
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      const theme = getThemePreference();
      const root = document.documentElement;
      
      if (theme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    })();
  `;

    return (
        <script
            dangerouslySetInnerHTML={{ __html: themeScript }}
            suppressHydrationWarning
        />
    );
}
