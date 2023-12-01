import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AppBarHeading from './AppBarHeading';
import AppBarSubHeading from './AppBarSubHeading';

function TopAppBar() {
  function getFormattedDate() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const dayOfMonth = today.getDate();
    const month = monthsOfYear[today.getMonth()];

    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

    return formattedDate;
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "white.main", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0" }} style={{ borderBottom: "2px solid black" }}>
      <Container maxWidth="xl" sx={{ display: "flex" }} style={{ padding: "0" }}>
        <Toolbar disableGutters sx={{ flex: "1" }}>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            <AppBarHeading>Hello, Admin</AppBarHeading>
            <AppBarSubHeading>{getFormattedDate()}</AppBarSubHeading>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={() => { }} sx={{ p: 0 }}>
              <Avatar sx={{ bgcolor: "primary.light" }}>ET</Avatar>
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopAppBar;