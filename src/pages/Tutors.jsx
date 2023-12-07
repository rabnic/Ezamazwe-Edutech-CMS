import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from '@mui/material'
import React from 'react'

import PageHeadingContainer from '../Components/PageHeadingContainer'

function Tutors() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1C3F53",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px" }}>

      <PageHeadingContainer
        heading="Tutors"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto" }}>


        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >FullName</StyledTableCell>
                <StyledTableCell >Phone Number</StyledTableCell>
                <StyledTableCell >Email Address</StyledTableCell>
                {/* <StyledTableCell >Role</StyledTableCell> */}
                <StyledTableCell >Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>


              <TableRow >
                <TableCell colSpan={4}>
                  <Typography sx={{justifyContent:"center", alignItems: 'center', textAlign:"center", paddingTop: "30px", paddingBottom:"30px", marginLeft: "auto",  marginRight: "auto", fontSize: '15px' }}>
                  No Tutors are registered at the moment...
                  </Typography>
                </TableCell>
                {/* <TableCell rowSpan={5}>
                  <Typography sx={{justifyContent:"center", alignItems: 'center', paddingTop: "30px", paddingLeft: "0px", fontSize: '15px' }}>
                  No Tutors are registered at the moment...
                  </Typography>
                </TableCell>
                <TableCell rowSpan={5}>
                  <Typography sx={{justifyContent:"center", alignItems: 'center', paddingTop: "30px", paddingLeft: "0px", fontSize: '15px' }}>
                  No Tutors are registered at the moment...
                  </Typography>
                </TableCell>
                <TableCell rowSpan={5}>
                  <Typography sx={{justifyContent:"center", alignItems: 'center', paddingTop: "30px", paddingLeft: "0px", fontSize: '15px' }}>
                  No Tutors are registered at the moment...
                  </Typography>
                </TableCell> */}
              </TableRow>


              {/* {/* {adminList.map((data) => ( 
              <StyledTableRow key={data.email}>*/}
              {/* <StyledTableRow rowSpan={4} >
               <StyledTableCell  rowSpan={4}> <Typography sx={{ alignSelf: 'center', paddingTop: "50px", fontSize: '15px' }}>No Tutors are registered at the moment...</Typography></StyledTableCell>
              </StyledTableRow> */}

              {/* <StyledTableCell >{data.fullName || data.firstName}</StyledTableCell>
                                    <StyledTableCell >{data.phoneNumber}</StyledTableCell>
                                    <StyledTableCell >{data.email}</StyledTableCell>
                                    
                                    <StyledTableCell sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                                        <IconButton onClick={() => editAdmin(data.id, data.fullName, data.phoneNumber, data.email)}>
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton onClick={() => { setID(data.id); setIsAlertDialogOpen(true) }}>
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
  ))} */}



            </TableBody>
          </Table>
        </TableContainer>
        {/* <Typography sx={{ alignSelf: 'center', paddingTop: "200px", fontSize: '20px' }}>No Tutors are registered at the moment...</Typography> */}

      </Box>

    </Box>
  )
}

export default Tutors