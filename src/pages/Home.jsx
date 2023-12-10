import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TrafficOverview from '../Components/dashboard/TrafficOverview';
import SummaryCardOverview from '../Components/dashboard/SummaryCardOverview';
import { UserGrowthOverview } from '../Components/dashboard/UserGrowth'
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import AcademicCapIcon from '@heroicons/react/24/solid/AcademicCapIcon';
import UserGroupIcon from '@heroicons/react/24/solid/UserGroupIcon';




function Home() {
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
                value="5k"
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
                difference={9}
                positive
                sx={{ height: '100%' }}
                value="2k"
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
                positive={false}
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
                difference={9}
                positive
                sx={{ height: '100%' }}
                value="R24k"
                title={"Subscriptions Profit"}
                icon={<CurrencyDollarIcon />}
              />
            </Grid>
            {/* <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >
              <UsersOverview
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value="1.6k"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >
              <SummaryCardOverview
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="$24k"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >
              <UsersOverview
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value="1.6k"
              />
            </Grid> */}


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
                  {
                    name: 'Last year',
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                  }
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
            {/* <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewLatestProducts
                products={[
                  {
                    id: '5ece2c077e39da27658aa8a9',
                    image: '/assets/products/product-1.png',
                    name: 'Healthcare Erbology',
                    updatedAt: subHours(now, 6).getTime()
                  },
                  {
                    id: '5ece2c0d16f70bff2cf86cd8',
                    image: '/assets/products/product-2.png',
                    name: 'Makeup Lancome Rouge',
                    updatedAt: subDays(subHours(now, 8), 2).getTime()
                  },
                  {
                    id: 'b393ce1b09c1254c3a92c827',
                    image: '/assets/products/product-5.png',
                    name: 'Skincare Soja CO',
                    updatedAt: subDays(subHours(now, 1), 1).getTime()
                  },
                  {
                    id: 'a6ede15670da63f49f752c89',
                    image: '/assets/products/product-6.png',
                    name: 'Makeup Lipstick',
                    updatedAt: subDays(subHours(now, 3), 3).getTime()
                  },
                  {
                    id: 'bcad5524fe3a2f8f8620ceda',
                    image: '/assets/products/product-7.png',
                    name: 'Healthcare Ritual',
                    updatedAt: subDays(subHours(now, 5), 6).getTime()
                  }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid> */}
            {/* <Grid
              xs={12}
              md={12}
              lg={8}
            >
              <OverviewLatestOrders
                orders={[
                  {
                    id: 'f69f88012978187a6c12897f',
                    ref: 'DEV1049',
                    amount: 30.5,
                    customer: {
                      name: 'Ekaterina Tankova'
                    },
                    createdAt: 1555016400000,
                    status: 'pending'
                  },
                  {
                    id: '9eaa1c7dd4433f413c308ce2',
                    ref: 'DEV1048',
                    amount: 25.1,
                    customer: {
                      name: 'Cao Yu'
                    },
                    createdAt: 1555016400000,
                    status: 'delivered'
                  },
                  {
                    id: '01a5230c811bd04996ce7c13',
                    ref: 'DEV1047',
                    amount: 10.99,
                    customer: {
                      name: 'Alexa Richardson'
                    },
                    createdAt: 1554930000000,
                    status: 'refunded'
                  },
                  {
                    id: '1f4e1bd0a87cea23cdb83d18',
                    ref: 'DEV1046',
                    amount: 96.43,
                    customer: {
                      name: 'Anje Keizer'
                    },
                    createdAt: 1554757200000,
                    status: 'pending'
                  },
                  {
                    id: '9f974f239d29ede969367103',
                    ref: 'DEV1045',
                    amount: 32.54,
                    customer: {
                      name: 'Clarke Gillebert'
                    },
                    createdAt: 1554670800000,
                    status: 'delivered'
                  },
                  {
                    id: 'ffc83c1560ec2f66a1c05596',
                    ref: 'DEV1044',
                    amount: 16.76,
                    customer: {
                      name: 'Adam Denisov'
                    },
                    createdAt: 1554670800000,
                    status: 'delivered'
                  }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid> */}
          </Grid>
        </Container>



      </Box>

    </Box>
  )
}

export default Home