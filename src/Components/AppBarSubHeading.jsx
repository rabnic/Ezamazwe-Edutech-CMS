import React from 'react'
import { Typography } from '@mui/material'

const AppBarSubHeading
  = ({ children }) => {
    return (
      <Typography variant="h6" component="h6" sx={{ color: 'black.main', fontWeight: "400", lineHeight: "125%", letterSpacing: "0.25px", fontSize: { xs: "1rem" }, textAlign: { xs: "center", sm: "left", lg: "left" } }}>
        {children}
      </Typography>
    )
  }

export default AppBarSubHeading