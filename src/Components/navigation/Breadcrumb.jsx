import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';


function handleClick(event) {
    event.preventDefault();
}

export default function Breadcrumb() {
    const location = useLocation();
    const navigate = useNavigate();

    const paths = location.pathname.split("/").slice(1)
    console.info('paths:', paths)
    const styles = {
        separator: {
            fontSize: '20px',
        },
    };
    return (
        <Box sx={{ paddingBottom: "4px", paddingTop: "4px", bgcolor: "greys.light" }} style={{ borderTop: "2px solid #777", borderBottom: "2px solid #777", width: "100%" }}>
            <Breadcrumbs separator={<span style={styles.separator}>/</span>} aria-label="breadcrumb" sx={{ height: "fit-content" }} >
                {
                    paths.map((path, index) => {
                        return (
                            index === paths.length - 1 ?
                                (
                                    <Typography key={index} sx={{ marginBottom: "auto", marginTop: "auto" }} variant='body1' color="text.primary">{index === 0 ? "Category" : path}</Typography>

                                )
                                :
                                (
                                    <Typography
                                        key={index}
                                        underline="hover"
                                        color="inherit"
                                        variant='body1'
                                        sx={{
                                            marginBottom: "auto", marginTop: "auto", cursor: "pointer", '&:hover': {
                                                color: 'primary.main',
                                                fontWeight: "400" // 
                                            }
                                        }}
                                        onClick={() => navigate(`/${paths.slice(0, index + 1).join("/")}`)}
                                    >
                                        {index === 0 ? "Category" : path}
                                    </Typography>
                                )
                        )
                    })
                }

            </Breadcrumbs>
        </Box>
    );
}

