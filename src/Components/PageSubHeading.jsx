import React from 'react'
import { Typography } from '@mui/material'

const PageSubHeading = ({children}) => {
  return (
    <Typography variant="h6" component="h6" sx={{color: 'black.main', fontWeight: "500", lineHeight: "125%", letterSpacing: "0.25px"}}>
      {children}
    </Typography>
  )
}

export default PageSubHeading