import { Box, Container, Typography, Paper, Divider, Chip, useTheme } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { education } from '../data'
import { Animate } from './Animate'

export function Education() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      component="section"
      id="education"
      sx={{ py: 12, bgcolor: isDark ? 'rgba(255,255,255,0.018)' : 'rgba(0,0,0,0.018)' }}
    >
      <Container maxWidth="lg">
        <Animate>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, fontSize: '0.75rem' }}
          >
            Academic
          </Typography>
          <Typography variant="h2" sx={{ mb: 7 }}>Education</Typography>
        </Animate>

        <Animate delay={0.1}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
              bgcolor: isDark ? 'rgba(255,255,255,0.025)' : '#fff',
              maxWidth: 820,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 1,
                mb: 1,
              }}
            >
              <Typography variant="h4">{education.institution}</Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontFamily: '"Space Mono", monospace',
                  alignSelf: 'center',
                  opacity: 0.8,
                }}
              >
                {education.period}
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
              {education.degree}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3.5 }}>
              {education.note}
            </Typography>

            <Divider sx={{ mb: 3.5 }} />

            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                border: `1px solid ${theme.palette.secondary.main}30`,
                bgcolor: `${theme.palette.secondary.main}08`,
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 3, fontSize: '0.68rem' }}
              >
                Thesis
              </Typography>
              <Typography variant="h6" fontWeight={600} sx={{ mt: 1, mb: 1 }}>
                {education.thesis.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
                {education.thesis.description}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Chip
                  icon={<StarIcon sx={{ fontSize: '0.85rem !important', color: `${theme.palette.secondary.main} !important` }} />}
                  label={`Score: ${education.thesis.score}`}
                  size="small"
                  sx={{
                    bgcolor: `${theme.palette.secondary.main}20`,
                    color: 'secondary.main',
                    fontWeight: 700,
                    border: `1px solid ${theme.palette.secondary.main}40`,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', fontStyle: 'italic', opacity: 0.85 }}
                >
                  {education.thesis.note}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Animate>
      </Container>
    </Box>
  )
}
