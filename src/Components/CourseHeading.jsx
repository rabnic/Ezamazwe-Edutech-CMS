import React from 'react'
import { Typography } from "@mui/material"

function CourseHeading({children}) {
  return (
    <Typography variant="h3" sx={{color: 'white', fontWeight: "700", textAlign:"left", fontFamily: "Roboto", width: "145px", height: "56px"}}>
      {children}
    </Typography>
  )
}

export default CourseHeading