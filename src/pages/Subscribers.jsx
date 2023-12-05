import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { database } from '../services/firebase'
import { collection, getDocs } from 'firebase/firestore'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const columns = [
  { label: 'First Name', minWidth: 80 },
  { label: 'Last Name', minWidth: 80 },
  {

    label: 'Phone Number',
    minWidth: 100,
    // align: 'right',

  },
  {

    label: 'Email Address',
    minWidth: 100,
    // align: 'right',

  },
  // {
  //   id: 'density',
  //   label: 'Subscription',
  //   minWidth: 100,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'density',
  //   label: 'Expiry Date',
  //   minWidth: 100,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];


function Subscribers() {


  const [value, setValue] = React.useState(0);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [subscribedUserList, setSubscribedUserList] = useState([]);
  const [unsubscribedUserList, setUnsubscribedUserList] = useState([]);

  const userCollection = collection(database, "users")


  useEffect(() => {
    // getUsersList()
    getSubscribedUsersList()
    getUnsubscribedUsersList()
  }, [])


  const getSubscribedUsersList = async () => {
    try {
      const data = await getDocs(userCollection);

      const filteredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((user) => user.subscription === 'subscribed'); // Modify this line to match your subscription field condition

      setSubscribedUserList(filteredData);

      console.log(filteredData);
    } catch (error) {
      console.error('Error fetching collection', error);
    }
  };

  const getUnsubscribedUsersList = async () => {
    try {
      const data = await getDocs(userCollection);

      const filteredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((user) => user.subscription === 'unsubscribed'); // Modify this line to match your subscription field condition

      setUnsubscribedUserList(filteredData);

      console.log(filteredData);
    } catch (error) {
      console.error('Error fetching collection', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event, newValue) => {
    console.log("newValue",newValue);
    setValue(newValue);

  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px", marginLeft: "auto", marginRight: "auto" }}>

      <PageHeadingContainer
        heading="Subscribers"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: { xs: "90%", sm: "100%", md: "100%", lg: "100%" }, height: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered variant='fullWidth'
          sx={{
            "& button:focus": { backgroundColor: "primary.main", color: "#fff" },
            "& button:active": { backgroundColor: "primary.main" },
          }}

        >
          <Tab label="Active Subscription" {...a11yProps(0)} sx={{ border: "1px solid #1C3F53", color: "primary.light" }} />
          <Tab label="Expired Subscription" {...a11yProps(1)} sx={{ border: "1px solid #1C3F53", color: "primary.light" }} />
        </Tabs>

        <CustomTabPanel value={value} index={0} sx={{ p: 0 }} >
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ width: "fullWidth", maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    subscribedUserList.map((data, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          <TableCell align='left'>{data.firstName}</TableCell>
                          <TableCell>{data.lastName}</TableCell>
                          <TableCell>{data.phoneNum}</TableCell>
                          <TableCell>{data.email}</TableCell>
                          {/* <TableCell>{data.subscription}</TableCell> */}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ width: "fullWidth", maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    unsubscribedUserList.map((data, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          <TableCell align='left'>{data.firstName}</TableCell>
                          <TableCell>{data.lastName}</TableCell>
                          <TableCell>{data.phoneNum}</TableCell>
                          <TableCell>{data.email}</TableCell>
                          {/* <TableCell>{data.subscription}</TableCell> */}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </CustomTabPanel>
      </Box>

    </Box >
  )
}

export default Subscribers