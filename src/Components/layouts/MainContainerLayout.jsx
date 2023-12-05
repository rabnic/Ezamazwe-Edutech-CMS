import { Box } from '@mui/material'
import React from 'react'
import SideNavigation from '../navigation/SideNavigation'
import TopAppBar from '../TopAppBar'

function MainContainerLayout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }} style={{ maxHeight: '100vh', overflow: "hidden" }}>
      {/* Different */}
      <Box sx={{ width: { lg: "270px", md: "270px", sm: "80px" }, height: "100vh" }}>
        <SideNavigation />
      </Box>
      <Box sx={{ width: "100%", display: "flex", flex: "2", flexDirection: "column", padding: "15px", paddingTop: "0px" }} >
        <Box sx={{ width: "100%", height: "100px", display: "flex", flexDirection: "row" }}>
          <TopAppBar />
        </Box>
        <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", paddingTop: "15px" }} style={{ overflow: 'scroll' }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default MainContainerLayout