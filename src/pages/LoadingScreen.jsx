import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function LoadingScreen() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column",height: '100vh', width: "100vw", overflow: "hidden", justifyContent:"center", alignItems:"center" }} >
        <Box
              component="img"
              sx={{
                width: "30%",
                border:"1px solid red"
              }}
              alt="Ezamazwe Logo"
              src={require('../assets/Logo.jpg')}
            />
            <CircularProgress thickness={3} color="primary" size={40} />
    </Box>
  )
}

export default LoadingScreen