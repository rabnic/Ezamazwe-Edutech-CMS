import { Box } from '@mui/material'
import React from 'react'
import PageHeading from './PageHeading'
import PageSubHeading from './PageSubHeading'

function PageHeadingContainer({ heading, subHeading = "" }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", gap: "10px" }}>
            <PageHeading>
                {heading}
            </PageHeading>
            {
                subHeading.length > 0 &&
                <PageSubHeading>
                    {subHeading}
                </PageSubHeading>
            }
        </Box>
    )
}

export default PageHeadingContainer