import { Box, Typography } from '@mui/material'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 4, textAlign: 'center', borderTop: '1px solid', borderColor: 'divider' }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Designed & built by{' '}
        <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
          Yiannis Nikolopoulos
        </Box>
      </Typography>
    </Box>
  )
}
