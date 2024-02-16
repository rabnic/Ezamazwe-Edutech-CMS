import { Box, Container, Typography } from '@mui/material';

const NotFound404 = () => (
    <Box
        component="main"
        sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%'
        }}
    >
        <Container maxWidth="md">
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >

                <Typography
                    align="center"
                    sx={{ mb: 3, fontWeight: "900" }}
                    variant="h4"
                >
                    404: Page not found
                </Typography>
                <Box
                    sx={{
                        mb: 3,
                        textAlign: 'center'
                    }}
                >
                    <img
                        alt="Under development"
                        src={require('../assets/error-404.png')}
                        style={{
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 200
                        }}
                    />
                </Box>
                <Typography
                    align="center"
                    color="text.secondary"
                    variant="body1"
                    sx={{ width: { xs: "100%", md: "80%" } }}
                >
                    Sorry, we could not find the page you are looking for.
                    Perhaps you have mistyped the URL? Be sure to check your spelling.
                </Typography>
            </Box>
        </Container>
    </Box>
);

export default NotFound404;
