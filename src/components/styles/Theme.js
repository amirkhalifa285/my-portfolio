// Design tokens. Colors must stay 6-digit hex: components append 2-digit
// alpha suffixes (e.g. `${theme.colors.primary}40`).

const shared = {
  fonts: {
    main: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.375rem',
    '2xl': '1.75rem',
    '3xl': 'clamp(2rem, 4vw, 2.5rem)',
    display: 'clamp(2.5rem, 6vw, 4rem)',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
    '2xl': '64px',
    section: 'clamp(72px, 10vw, 128px)',
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    pill: '999px',
  },
  layout: {
    maxWidth: '1080px',
    gutter: '24px',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '968px',
  },
};

export const darkTheme = {
  ...shared,
  mode: 'dark',
  colors: {
    background: '#0b0b0c',
    surface: '#141416',
    surfaceHover: '#1a1a1d',
    text: '#ededef',
    muted: '#a1a1aa',
    subtle: '#71717a',
    border: '#27272a',
    primary: '#7aa2ff',
    onPrimary: '#0b0b0c',
    // Legacy keys still used by sections not yet restyled
    accent: '#a1a1aa',
    cardBackground: '#141416',
    cardBorder: '#27272a',
  },
};

export const lightTheme = {
  ...shared,
  mode: 'light',
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    surfaceHover: '#f4f4f5',
    text: '#18181b',
    muted: '#52525b',
    subtle: '#a1a1aa',
    border: '#e4e4e7',
    primary: '#2556d9',
    onPrimary: '#ffffff',
    accent: '#52525b',
    cardBackground: '#ffffff',
    cardBorder: '#e4e4e7',
  },
};
