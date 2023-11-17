import { Box, Typography } from '@mui/material'
import React from 'react'



const SideNavLogoutTab = ({Icon, text, navigateFunction}) => {
 
  return (
    <Box sx={{display:"flex",justifyContent:"center",width: "auto", cursor:"pointer" , flexDirection:"row", gap: 3, alignItems:"center", margin: "0px", borderTopLeftRadius: "10px",borderBottomLeftRadius: "10px", paddingTop: "10px", paddingBottom: "10px"}} onClick={navigateFunction}>
        {<Icon color="warning"/>} 
        <Typography sx={{color:"warning.main", cursor:"pointer"}}>{text}</Typography>
    </Box>
  )
}
 
export default SideNavLogoutTab