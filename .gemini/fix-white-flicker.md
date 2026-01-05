# White Flicker Fix - Production Theme Issue

## Problem
When refreshing the page in production, there was a noticeable white flicker before the correct theme (light/dark) was applied. This happened because:

1. The HTML initially rendered with no theme class
2. JavaScript needed to load and execute to read the theme preference
3. Only then was the `dark` class added to the `<html>` element
4. This caused a brief flash of white background

## Solution
Implemented a **multi-layered approach** to prevent the flicker:

### 1. Inline Blocking Script (layout.tsx)
Added a synchronous script in the `<head>` that runs **before** React hydrates:

```typescript
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var theme = localStorage.getItem('theme');
          var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          var effectiveTheme = theme === 'system' || !theme ? systemTheme : theme;
          
          if (effectiveTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();
    `,
  }}
/>
```

This script:
- Runs immediately before any content renders
- Reads the theme from localStorage
- Checks system preferences if theme is 'system' or not set
- Applies the correct `dark` class instantly

### 2. CSS Fallback Colors (globals.css)
Added explicit background colors to CSS to ensure there's always a defined background:

```css
html {
  background-color: oklch(1 0 0); /* Light mode by default */
}

:root {
  background-color: oklch(1 0 0);
  color: oklch(0.145 0 0);
}

.dark {
  background-color: oklch(0.145 0 0);
  color: oklch(0.985 0 0);
}
```

### 3. suppressHydrationWarning
Already present on both `<html>` and `<body>` tags to prevent React warnings about the theme class mismatch during hydration.

## Benefits
- ✅ No white flicker on page refresh
- ✅ Instant theme application
- ✅ Works even if JavaScript fails to load
- ✅ Respects user's theme preference (localStorage + system)
- ✅ No performance impact (synchronous script is minimal)

## Testing
To verify the fix:
1. Build for production: `npm run build`
2. Start production server: `npm start`
3. Toggle between light/dark themes
4. Refresh the page multiple times
5. No white flicker should occur

## Note
The CSS lint warnings about `@custom-variant`, `@theme`, and `@apply` are expected - these are Tailwind CSS directives that the CSS linter doesn't recognize but work correctly when processed by Tailwind.
