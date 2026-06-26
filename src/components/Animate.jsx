import { useRef, useEffect, useState } from 'react'
import { Box } from '@mui/material'

export function Animate({ children, delay = 0, sx = {}, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.55s ${delay}s ease, transform 0.55s ${delay}s ease`,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
