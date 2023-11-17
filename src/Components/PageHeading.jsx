import React from 'react'
import { Typography } from '@mui/material'

const PageHeading
 = ({children}) => {
  return (
    <Typography variant="h3" component="h3" sx={{color: 'primary.main', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px"}}>
      {children}
    </Typography>
  )
}

export default PageHeading