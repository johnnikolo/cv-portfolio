import { useState } from 'react'
import {
  AppBar, Toolbar, Typography, Box, IconButton,
  Button, Drawer, List, ListItem, ListItemButton,
  useTheme, useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { personal } from '../data'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import GitHubIcon from '@mui/icons-material/GitHub'

const NAV_LINKS = [
  { label: 'About', href: '#whatido' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Contact', href: '#contact' },
]

export function Header({ mode, onToggle }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 })

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? `${theme.palette.background.default}e0`
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar sx={{ maxWidth: 1100, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography
          component="a"
          href="#hero"
          variant="h6"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            textDecoration: 'none',
            fontFamily: '"Space Mono", monospace',
            flexGrow: { xs: 1, md: 0 },
            mr: { md: 4 },
          }}
        >
          YN
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly', flexGrow: 1 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Button
              key={href}
              href={href}
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '1.05rem',
                '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        <IconButton
          component="a"
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>

        <IconButton onClick={onToggle} sx={{ color: 'text.primary', mr: { xs: 0.5, md: 0 } }}>
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton
          sx={{ display: { md: 'none' }, color: 'text.primary' }}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 240, pt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {NAV_LINKS.map(({ label, href }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton
                  component="a"
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ py: 1.5, px: 3 }}
                >
                  <Typography variant="body1" fontWeight={500}>{label}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
