import { Box, Container, Typography, Paper, Chip, Avatar, useTheme } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { experience } from '../data'
import { Animate } from './Animate'

export function Experience() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: 12, bgcolor: isDark ? 'rgba(108,99,255,0.04)' : 'rgba(80,70,229,0.03)' }}
    >
      <Container maxWidth="lg">
        <Animate>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, fontSize: '0.72rem' }}
          >
            Career
          </Typography>
          <Typography variant="h2" sx={{ mb: 7 }}>Work Experience</Typography>
        </Animate>

        <Timeline position="alternate" sx={{
          p: 0, m: 0,
          '& .MuiTimelineItem-root:nth-of-type(even)': {
            flexDirection: { xs: 'row', md: 'row-reverse' },
          },
        }}>
          {experience.map((job, i) => {
            const isRight = i % 2 === 0
            return (
            <TimelineItem key={job.id} sx={{ '& .MuiTimelineContent-root': { textAlign: 'left' } }}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  justifyContent: isRight ? 'flex-end' : 'flex-start',
                  pt: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.72rem',
                    opacity: 0.7,
                  }}
                >
                  {job.period}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    p: 0,
                    border: 'none',
                    boxShadow: `0 0 16px ${job.color}60`,
                    bgcolor: 'transparent',
                  }}
                >
                  <Box
                    component="img"
                    src={job.logo}
                    alt={job.company}
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '12px',
                      objectFit: 'cover',
                      display: 'block',
                      border: `2px solid ${job.color}80`,
                    }}
                  />
                </TimelineDot>
                {i < experience.length - 1 && (
                  <TimelineConnector
                    sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)', width: 2 }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ pb: 5, pl: { xs: 3, md: isRight ? 3 : 0 }, pr: { xs: 0, md: isRight ? 0 : 3 }, textAlign: 'left' }}>
                <Animate delay={i * 0.1}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      textAlign: 'left',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                      borderLeft: { xs: `3px solid ${job.color}`, md: isRight ? `3px solid ${job.color}` : 'none' },
                      borderRight: { xs: 'none', md: !isRight ? `3px solid ${job.color}` : 'none' },
                      bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                      transition: 'transform 0.25s, box-shadow 0.25s',
                      '&:hover': {
                        transform: isRight ? 'translateX(4px)' : 'translateX(-4px)',
                        boxShadow: `0 8px 40px ${job.color}20`,
                      },
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
                      <Box>
                        <Typography variant="h5" sx={{ color: job.color }}>{job.company}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                          {job.role}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 0.5 }}>
                        <Chip
                          label={job.type}
                          size="small"
                          sx={{
                            bgcolor: `${job.color}20`,
                            color: job.color,
                            fontWeight: 700,
                            border: `1px solid ${job.color}40`,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '0.7rem',
                            display: { xs: 'block', md: 'none' },
                          }}
                        >
                          {job.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', display: 'block', mb: job.description ? 1 : 2.5, opacity: 0.75 }}
                    >
                      {job.location}
                    </Typography>

                    {job.description && (
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.7, fontStyle: 'italic', opacity: 0.85 }}
                      >
                        {job.description}
                      </Typography>
                    )}

                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                      {job.bullets.map((bullet, j) => (
                        <Box
                          component="li"
                          key={j}
                          sx={{
                            position: 'relative',
                            pl: 2.5,
                            mb: j < job.bullets.length - 1 ? 1.2 : 0,
                            color: 'text.secondary',
                            fontSize: '0.9rem',
                            lineHeight: 1.7,
                            '&::before': {
                              content: '"▹"',
                              position: 'absolute',
                              left: 0,
                              color: job.color,
                              fontWeight: 700,
                            },
                          }}
                        >
                          {bullet}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Animate>
              </TimelineContent>
            </TimelineItem>
            )
          })}
        </Timeline>
      </Container>
    </Box>
  )
}
