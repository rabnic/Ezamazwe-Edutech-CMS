import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TrafficOverview from '../Components/dashboard/TrafficOverview';
import SummaryCardOverview from '../Components/dashboard/SummaryCardOverview';
import { UserGrowthOverview } from '../Components/dashboard/UserGrowth'
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import AcademicCapIcon from '@heroicons/react/24/solid/AcademicCapIcon';
import UserGroupIcon from '@heroicons/react/24/solid/UserGroupIcon';
import { getUsers } from '../services/firebase'

function Home() {
  const subscriptionFee = 100.00;
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    getUsers().then((res) => {
      console.log('users', res)
      setUsersData(res)
    }).catch((err) => {
      console.log('error getting usersData', err)
    })
  }, [])

  const getTotalUsers = () => {
    return usersData.filter((data) => data.role === "user").length;
  }

  const getTotalSubscribers = () => {
    return usersData.filter((data) => data.subscription === "subscribed" && data.subscriptionStartDate).length;
  }

  const getSubscribersDifference = () => {

    const totalSubscribers = usersData.filter((data) => data.subscription === "subscribed" && data.subscriptionStartDate);
    const currentMonthSubscribers = totalSubscribers.filter((data) => data.subscriptionStartDate.includes(getCurrentYearAndMonth())).length;
    if (currentMonthSubscribers === totalSubscribers.length) return 0;
    return currentMonthSubscribers / totalSubscribers.length
  }

  const getCurrentYearAndMonth = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    return year + '-' + month;
  }

  if (usersData) {
    console.log("Total Users =", getTotalUsers())
    console.log("Total Subscribers =", getTotalSubscribers())
    console.log("Total Subscribers Diff =", getSubscribersDifference())
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px" }}>

      <PageHeadingContainer
        heading="Dashboard"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{
        marginTop: "20px",
      }}>

        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >
              <SummaryCardOverview
                difference={5}
                positive={false}
                sx={{ height: '100%' }}
                value={usersData ? getTotalUsers() : 0}
                title={"Total Users"}
                icon={<UsersIcon />}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >
              <SummaryCardOverview
                difference={getSubscribersDifference()}
                positive
                sx={{ height: '100%' }}
                value={usersData ? getTotalSubscribers() : 0}
                title={"Total Subscriptions"}
                icon={<AcademicCapIcon />}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >
              <SummaryCardOverview
                difference={0}
                positive
                sx={{ height: '100%' }}
                value="0"
                title={"Total Tutors"}
                icon={<UserGroupIcon />}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >
              <SummaryCardOverview
                difference={getSubscribersDifference()}
                positive
                sx={{ height: '100%' }}
                value={`R${usersData ? getTotalSubscribers() * subscriptionFee : 0.00}`}
                title={"Subscriptions Profit"}
                icon={<CurrencyDollarIcon />}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={8}
            >
              <UserGrowthOverview
                chartSeries={[
                  {
                    name: 'This year',
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                  },
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
            >
              <TrafficOverview
                chartSeries={[63, 15, 22]}
                labels={['Desktop', 'Tablet', 'Phone']}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>



      </Box>

    </Box>
  )
}

export default Home