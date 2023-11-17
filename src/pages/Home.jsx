import { Box } from '@mui/material'
import React from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'

function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px"}}>
    
            <PageHeadingContainer 
                heading="Home/Dashboard"
                subHeading="Some sub heading for this page"
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto" }}>
                
            </Box>

        </Box>
  )
}

export default Home