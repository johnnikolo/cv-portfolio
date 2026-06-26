import { useState, useMemo, useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { buildTheme } from './theme'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhatIDo } from './components/WhatIDo'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { OpenSource } from './components/OpenSource'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Loader } from './components/Loader'

export default function App() {
  const [mode, setMode] = useState('dark')
  const theme = useMemo(() => buildTheme(mode), [mode])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loader visible={loading} />
      <Header mode={mode} onToggle={() => setMode(m => (m === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <WhatIDo />
        <Experience />
        <Skills />
        <OpenSource />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
