import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from './Icons'

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#hero" className="header__logo">YN</a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="header__link" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`hamburger__line${menuOpen ? ' hamburger__line--1-open' : ''}`} />
            <span className={`hamburger__line${menuOpen ? ' hamburger__line--2-open' : ''}`} />
            <span className={`hamburger__line${menuOpen ? ' hamburger__line--3-open' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
