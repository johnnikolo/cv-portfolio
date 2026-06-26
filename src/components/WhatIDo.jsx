import { Box, Container, Typography, useTheme } from '@mui/material'
import Lottie from 'lottie-react'
import landingAnimation from '../assets/coding.json'
import { Animate } from './Animate'

const SKILLS_BULLETS = [
  '⚡ Build highly interactive frontends and design systems used at scale',
  '⚡ Ship full-stack features end-to-end — from API design to production deployment',
  '⚡ Drive observability and alerting platform work across cross-functional teams',
]

export function WhatIDo() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      component="section"
      id="whatido"
      sx={{ py: 12, bgcolor: isDark ? 'rgba(108,99,255,0.04)' : 'rgba(80,70,229,0.03)' }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { md: 8 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Left: Lottie */}
          <Animate sx={{ flex: '0 0 auto', width: { xs: '75%', md: '40%' }, maxWidth: 420 }}>
            <Lottie animationData={landingAnimation} loop style={{ width: '100%', height: 'auto' }} />
          </Animate>

          {/* Right: text */}
          <Box sx={{ flex: '1 1 0' }}>
            <Animate>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, fontSize: '0.72rem' }}
              >
                About me
              </Typography>
              <Typography variant="h2" sx={{ mb: 2 }}>What I Do</Typography>
            </Animate>

            <Animate delay={0.08}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                User-focused Software Engineer with a strong eye for design and a deep understanding
                of frontend architecture, component systems, and observability platforms. I thrive
                at the intersection of engineering craft and product impact.
              </Typography>
            </Animate>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {SKILLS_BULLETS.map((bullet, i) => (
                <Animate key={i} delay={0.12 + i * 0.06}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      pl: 0,
                      lineHeight: 1.7,
                      fontSize: '0.97rem',
                    }}
                  >
                    {bullet}
                  </Typography>
                </Animate>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
