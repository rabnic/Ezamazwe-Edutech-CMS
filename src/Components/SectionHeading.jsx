import React from 'react'
import { Typography } from '@mui/material'

const SectionHeading = ({ children }) => {
  return (
    <Typography variant="h4" component="h4" sx={{ color: 'primary.main', fontWeight: "bold", letterSpacing: "0.25px", textAlign: "center", fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2rem" } }}>
      {children}
    </Typography>
  )
}

export default SectionHeading