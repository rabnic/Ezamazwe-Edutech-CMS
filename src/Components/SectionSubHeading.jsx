import React from 'react'
import { Typography } from '@mui/material'

const SectionSubHeading = ({ children }) => {
  return (
    <Typography variant="h6" sx={{ color: 'primary.light', fontWeight: "400", textAlign: "center", fontSize: { xs: "1rem", md: "1.3rem", lg: "1.5rem" } }}>
      {children}
    </Typography>
  )
}

export default SectionSubHeading