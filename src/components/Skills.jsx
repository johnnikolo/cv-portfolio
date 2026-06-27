import { Box, Container, Typography, Paper, Tooltip, useTheme } from '@mui/material'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPhp, SiMysql, SiGraphql, SiCss, SiSass, SiHtml5,
  SiJest, SiCypress, SiGit, SiWordpress, SiElasticsearch,
  SiContentful, SiJira, SiGithub, SiKibana, SiOpenai,
  SiJquery, SiStyledcomponents, SiTestinglibrary, SiReacthookform,
} from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'
import { Animate } from './Animate'

const TECH_ICONS = [
  // Core
  { Icon: SiHtml5, label: 'HTML5', color: '#e34c26' },
  { Icon: SiCss, label: 'CSS3', color: '#264de4' },
  { Icon: SiSass, label: 'Sass', color: '#cc6699' },
  { Icon: SiJavascript, label: 'JavaScript', color: '#f1e05a' },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  // Frontend
  { Icon: SiReact, label: 'React', color: '#61dafb' },
  { Icon: SiReacthookform, label: 'React Hook Form', color: '#ec5990' },
  { Icon: SiStyledcomponents, label: 'Styled Components', color: '#db7093' },
  { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
  { Icon: SiJquery, label: 'jQuery', color: '#0769ad' },
  // Backend
  { Icon: SiNodedotjs, label: 'Node.js', color: '#68a063' },
  { Icon: SiPhp, label: 'PHP', color: '#777bb3' },
  { Icon: SiMysql, label: 'MySQL', color: '#4479a1' },
  { Icon: SiGraphql, label: 'GraphQL', color: '#e10098' },
  // Testing
  { Icon: SiJest, label: 'Jest', color: '#c21325' },
  { Icon: SiTestinglibrary, label: 'Testing Library', color: '#e33332' },
  { Icon: SiCypress, label: 'Cypress', color: '#69d3a7' },
  { Icon: FaMicrosoft, label: 'Playwright', color: '#2ead33' },
  // Elastic Stack
  { Icon: SiElasticsearch, label: 'Elasticsearch', color: '#00bfb3' },
  { Icon: SiKibana, label: 'Kibana', color: '#f04e98' },
  // Tools
  { Icon: SiGit, label: 'Git', color: '#f05032' },
  { Icon: SiGithub, label: 'GitHub', color: '#fff' },
  { Icon: SiJira, label: 'Jira', color: '#0052cc' },
  { Icon: SiContentful, label: 'Contentful', color: '#2478cc' },
  { Icon: SiWordpress, label: 'WordPress', color: '#21759b' },
  // AI
  { Icon: SiOpenai, label: 'AI Workflows', color: '#74aa9c' },
]


export function Skills() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box component="section" id="skills" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Animate>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, fontSize: '0.72rem' }}
          >
            Toolkit
          </Typography>
          <Typography variant="h2" sx={{ mb: 2 }}>Skills & Tech Stack</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 7, maxWidth: 540 }}>
            Technologies I've worked with across production codebases, open source, and client projects.
          </Typography>
        </Animate>

        {/* Tech icons */}
        <Animate delay={0.06}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mb: 8,
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            {TECH_ICONS.map(({ Icon, label, color }) => (
              <Tooltip key={label} title={label} placement="top">
                <Paper
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0.8,
                    p: 2,
                    width: 96,
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                    bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                    cursor: 'default',
                    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: color,
                      boxShadow: `0 6px 24px ${color}30`,
                    },
                  }}
                >
                  <Icon size={32} color={color} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.65rem',
                      textAlign: 'center',
                      fontFamily: '"Space Mono", monospace',
                    }}
                  >
                    {label}
                  </Typography>
                </Paper>
              </Tooltip>
            ))}
          </Box>
        </Animate>

      </Container>
    </Box>
  )
}
