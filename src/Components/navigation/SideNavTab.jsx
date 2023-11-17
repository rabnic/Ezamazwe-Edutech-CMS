import { Box, Typography } from '@mui/material'
import React from 'react'



const SideNavTab = ({Icon, text, navigateFunction, active}) => {
 
  return (
    <Box sx={{display:"flex", width: "100%", cursor:"pointer" , flexDirection:"row", gap: 3, alignItems:"center", margin: "0px", borderTopLeftRadius: "10px",borderBottomLeftRadius: "10px", boxShadow: active ? 3 : 0,paddingLeft:"20px", paddingTop: "10px", paddingBottom: "10px"}} onClick={navigateFunction} bgcolor={active ? "white.main" : "primary.main"}>
        {<Icon color={!active ? "white" : "primary"}/>} 
        <Typography sx={{color: !active ? "white.main" : "primary.main", cursor:"pointer"}}>{text}</Typography>
    </Box>
  )
}
 
export default SideNavTab