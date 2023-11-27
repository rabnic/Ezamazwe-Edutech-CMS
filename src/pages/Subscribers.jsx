import { Box } from '@mui/material'
import React from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

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
        <Box sx={{ p: 3 }}>
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


function Subscribers() {


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px" }}>

      <PageHeadingContainer
        heading="Subscribers"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <Box sx={{ width: '100%' }}>
          <Box >
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Active Subscription" {...a11yProps(0)} sx={{ backgroundColor: "primary.main", color: "#fff" }} />
              <Tab label="Expired Subscription" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
      </Box>

    </Box>
  )
}

export default Subscribers