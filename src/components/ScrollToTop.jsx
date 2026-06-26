import { Fab, Zoom, useScrollTrigger, useTheme } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export function ScrollToTop() {
  const theme = useTheme()
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 400 })

  return (
    <Zoom in={visible}>
      <Fab
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        size="small"
        aria-label="Scroll to top"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: '#fff',
          boxShadow: `0 4px 20px ${theme.palette.primary.main}50`,
          '&:hover': { opacity: 0.88 },
          zIndex: 1200,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
}
