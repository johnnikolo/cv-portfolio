import { Box, Container, Typography, Paper, Tooltip, useTheme } from '@mui/material'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPhp, SiMysql, SiGraphql, SiCss, SiSass, SiHtml5,
  SiJest, SiCypress, SiGit, SiWordpress, SiElasticsearch,
  SiContentful, SiJira, SiGithub, SiKibana, SiOpenai,
  SiJquery, SiStyledcomponents, SiTestinglibrary, SiReacthookform,
  SiGooglegemini, SiElastic,
} from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'
import claudeLogo from '../assets/logos/claude.svg'
import cursorLogo from '../assets/logos/cursor.svg'
import { Animate } from './Animate'

const ICON_GROUPS = [
  {
    label: 'AI Tools',
    icons: [
      { Icon: SiGooglegemini, label: 'Gemini', color: '#8E75B2' },
      { src: claudeLogo, label: 'Claude', color: '#CC785C' },
      { src: cursorLogo, label: 'Cursor', color: '#6B7FD4' },
    ],
  },
  {
    label: 'Frontend',
    icons: [
      { Icon: SiJavascript, label: 'JavaScript', color: '#f1e05a' },
      { Icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
      { Icon: SiReact, label: 'React', color: '#61dafb' },
      { Icon: SiNextdotjs, label: 'Next.js', color: '#fff' },
      { Icon: SiReacthookform, label: 'React Hook Form', color: '#ec5990' },
      { Icon: SiJquery, label: 'jQuery', color: '#0769ad' },
      { Icon: SiStyledcomponents, label: 'Styled Components', color: '#db7093' },
      { Icon: SiHtml5, label: 'HTML5', color: '#e34c26' },
      { Icon: SiCss, label: 'CSS3', color: '#264de4' },
      { Icon: SiSass, label: 'Sass', color: '#cc6699' },
    ],
  },
  {
    label: 'Backend / Database',
    icons: [
      { Icon: SiNodedotjs, label: 'Node.js', color: '#68a063' },
      { Icon: SiPhp, label: 'PHP', color: '#777bb3' },
      { Icon: SiMysql, label: 'MySQL', color: '#4479a1' },
      { Icon: SiGraphql, label: 'GraphQL', color: '#e10098' },
    ],
  },
  {
    label: 'Kibana / Elastic Stack',
    icons: [
      { Icon: SiElasticsearch, label: 'Elasticsearch', color: '#00bfb3' },
      { Icon: SiKibana, label: 'Kibana', color: '#f04e98' },
      { Icon: SiElastic, label: 'EUI', color: '#F04E98' },
    ],
  },
  {
    label: 'Testing & Tools',
    icons: [
      { Icon: SiJest, label: 'Jest', color: '#c21325' },
      { Icon: SiTestinglibrary, label: 'RTL', color: '#e33332' },
      { Icon: SiCypress, label: 'Cypress', color: '#69d3a7' },
      { Icon: FaMicrosoft, label: 'Playwright', color: '#2ead33' },
      { Icon: SiGit, label: 'Git', color: '#f05032' },
      { Icon: SiGithub, label: 'GitHub', color: '#fff' },
      { Icon: SiJira, label: 'Jira', color: '#0052cc' },
      { Icon: SiContentful, label: 'Contentful', color: '#2478cc' },
      { Icon: SiWordpress, label: 'WordPress', color: '#21759b' },
    ],
  },
]

function IconCard({ Icon, src, label, color, isDark }) {
  return (
    <Tooltip title={label} placement="top">
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
        {src
          ? <Box component="img" src={src} alt={label} sx={{ width: 32, height: 32, objectFit: 'contain' }} />
          : <Icon size={32} color={color} />
        }
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
  )
}

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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {ICON_GROUPS.map((group, gi) => (
            <Animate key={group.label} delay={0.06 + gi * 0.05}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: 3,
                  fontWeight: 600,
                  fontSize: '0.68rem',
                  display: 'block',
                  mb: 2,
                  pb: 1,
                  borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                }}
              >
                {group.label}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {group.icons.map((icon) => (
                  <IconCard key={icon.label} {...icon} isDark={isDark} />
                ))}
              </Box>
            </Animate>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
