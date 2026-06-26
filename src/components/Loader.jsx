import { Box, Fade } from '@mui/material'
import Lottie from 'lottie-react'
import dolphinsAnimation from '../assets/dolphins.json'

export function Loader({ visible }) {
  return (
    <Fade in={visible} timeout={{ exit: 600 }} unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#0b0f1a',
        }}
      >
        <Box sx={{ width: { xs: 280, sm: 380 } }}>
          <Lottie animationData={dolphinsAnimation} loop />
        </Box>
      </Box>
    </Fade>
  )
}
