import React from 'react'
import { Typography } from '@mui/material'

const PageSubHeading = ({children}) => {
  return (
    <Typography variant="h6" component="h6" sx={{color: 'primary.main', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px"}}>
      {children}
    </Typography>
  )
}

export default PageSubHeading