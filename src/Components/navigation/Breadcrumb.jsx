import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
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
        // <div role="presentation" onClick={handleClick}>
        <Box sx={{ paddingBottom: "4px",paddingTop: "4px" }} style={{borderTop:"2px solid #777",borderBottom:"2px solid #777", width: "100%"}}>
            <Breadcrumbs separator={<span style={styles.separator}>/</span>} aria-label="breadcrumb" sx={{height:"fit-content"}} >
                {
                    paths.map((path, index) => {
                        return (
                            index === paths.length - 1 ?
                                (
                                    <Typography sx={{ marginBottom:"auto", marginTop:"auto"}} variant='body1' color="text.primary">{index === 0 ? "Category" : path}</Typography>

                                )
                                :
                                (
                                    <Typography
                                        underline="hover"
                                        color="inherit"
                                        variant='body1'
                                        sx={{ marginBottom:"auto", marginTop:"auto",cursor: "pointer" }}
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
        // </div> 
    );
}

