import React from 'react'
import { Typography } from '@mui/material'

const AppBarHeading
 = ({children}) => {
  return (
    <Typography variant="h5" component="h5" sx={{color: 'primary.main', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px"}}>
      {children}
    </Typography>
  )
}

export default AppBarHeading