import { createTheme } from '@mui/material'

export function buildTheme(mode) {
  const isDark = mode === 'dark'
  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? '#6c63ff' : '#5046e5' },
      secondary: { main: isDark ? '#22d3ee' : '#0891b2' },
      background: {
        default: isDark ? '#171c28' : '#f8f9ff',
        paper: isDark ? '#1f2538' : '#ffffff',
      },
      text: {
        primary: isDark ? '#ccd6f6' : '#1a1a2e',
        secondary: isDark ? '#8892b0' : '#4a4a6a',
      },
    },
    typography: {
      fontFamily: '"Space Grotesk", sans-serif',
      h1: { fontWeight: 700, letterSpacing: '-0.03em' },
      h2: { fontWeight: 700, letterSpacing: '-0.02em' },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      body1: { lineHeight: 1.7 },
      body2: { lineHeight: 1.6 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600, borderRadius: 50 },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontFamily: '"Space Mono", monospace', fontSize: '0.72rem' },
        },
      },
      MuiAppBar: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
    },
  })
}
