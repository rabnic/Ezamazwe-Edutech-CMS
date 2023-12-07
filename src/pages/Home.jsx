import { Box, Typography } from '@mui/material'
import React from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
// import graph_eza from '../assets/graph_eza.png'
import graph from '../assets/graph.png'
import TinyBarChart from '../Components/BarGraph'

function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px" }}>

      <PageHeadingContainer
        heading="Home/Dashboard"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto",  }}>


{/* <TinyBarChart/> */}

<Typography sx={{alignSelf:'center', paddingTop:"300px", fontSize:'20px'}}>No graphs are available at the moment...</Typography>
      {/* <Box
          sx={{
            backgroundImage: `url(${graph})`,
            backgroundSize: 'cover',
            height: '90vh',
            // border: "1px solid red"
          }}
        >
        
        </Box> */}
      </Box>

    </Box>
  )
}

export default Home