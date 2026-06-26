import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { personal } from '../data'
import { Animate } from './Animate'

export function Contact() {
  const theme = useTheme()

  return (
    <Box component="section" id="contact" sx={{ py: 16, textAlign: 'center' }}>
      <Container maxWidth="sm">
        <Animate>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, fontSize: '0.75rem' }}
          >
            What's next?
          </Typography>
        </Animate>

        <Animate delay={0.06}>
          <Typography variant="h2" sx={{ mb: 2.5 }}>Get In Touch</Typography>
        </Animate>

        <Animate delay={0.12}>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 5.5, lineHeight: 1.75 }}
          >
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hello — my inbox is always open.
          </Typography>
        </Animate>

        <Animate delay={0.18} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href={`mailto:${personal.email}`}
              sx={{
                px: 4,
                py: 1.4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: '#fff',
                boxShadow: `0 4px 24px ${theme.palette.primary.main}40`,
                '&:hover': { opacity: 0.88 },
              }}
            >
              Send an email
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedInIcon />}
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.4,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': { bgcolor: `${theme.palette.primary.main}10` },
              }}
            >
              Connect on LinkedIn
            </Button>
          </Stack>
        </Animate>
      </Container>
    </Box>
  )
}
