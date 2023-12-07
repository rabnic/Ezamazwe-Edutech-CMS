import { Box, Typography } from '@mui/material'
import React from 'react'
import PageHeading from './PageHeading'
import PageSubHeading from './PageSubHeading'

function PageHeadingContainer({ heading, subHeading = "" }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", gap: "10px" }}>
            <PageHeading>
                <Typography variant='h3' component="h3" sx={{ fontWeight: "Bold", fontSize: { xs: "1.2rem", lg: "2.2rem" } }}>
                    {heading}
                </Typography>
            </PageHeading>
            {
                subHeading.length > 0 &&
                <PageSubHeading>
                    <Typography variant='h3' component="h3" sx={{ fontWeight: "200", fontSize: { xs: "0.9rem", lg: "1.5rem", color: "primary.light" } }}>
                        {subHeading}
                    </Typography>
                </PageSubHeading>
            }
        </Box>
    )
}

export default PageHeadingContainer