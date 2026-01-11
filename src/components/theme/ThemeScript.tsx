/**
 * This script prevents the flash of white screen when loading the page in dark mode.
 * It runs before the page renders to apply the correct theme immediately.
 * IMPORTANT: This must be a server component (no "use client") to execute before hydration.
 */
export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        // Get theme preference from localStorage (next-themes uses 'theme' as default key)
        function getThemePreference() {
          if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem('theme');
            if (stored && (stored === 'dark' || stored === 'light')) {
              return stored;
            }
            // Check if user explicitly set system preference
            if (stored === 'system') {
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
          }
          // Default to system preference
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        const theme = getThemePreference();
        const root = document.documentElement;
        
        // Apply theme immediately
        if (theme === 'dark') {
          root.classList.add('dark');
          root.style.colorScheme = 'dark';
        } else {
          root.classList.remove('dark');
          root.style.colorScheme = 'light';
        }
      } catch (e) {
        console.error('Theme script error:', e);
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
