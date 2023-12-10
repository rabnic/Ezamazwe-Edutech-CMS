import PropTypes from 'prop-types';
// import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import ArrowsUpDownIcon from '@heroicons/react/24/solid/ArrowsUpDownIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography, styled } from '@mui/material';

const SummaryCardOverview = (props) => {
    const { difference, positive = false, value, sx, title, icon } = props;

    const CustomCard = styled(Card)({
        boxShadow: 'none',
        borderRadius: "15px",
    });

    return (
        <CustomCard sx={{
            ...sx, borderColor: "greys.dark", borderStyle: "solid",
            borderWidth: "1px"
        }} >
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            {title}
                        </Typography>
                        <Typography variant="h4">
                            {value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'primary.light',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            {icon}
                        </SvgIcon>
                    </Avatar>
                </Stack>
                {difference > -1 && (
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        <Stack
                            alignItems="center"
                            direction="row"
                            spacing={0.5}
                        >
                            <SvgIcon
                                color={positive ? 'success' : 'error'}
                                fontSize="small"
                            >
                                {
                                    difference === 0 ?

                                        <ArrowsUpDownIcon />
                                        :
                                        positive ? <ArrowUpIcon /> : <ArrowDownIcon />
                                }

                            </SvgIcon>
                            <Typography
                                color={positive ? 'success.main' : 'warning.main'}
                                variant="body2"
                            >
                                {difference}%
                            </Typography>
                        </Stack>
                        <Typography
                            color="text.secondary"
                            variant="caption"
                        >
                            Since last month
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </CustomCard>
    );
};

SummaryCardOverview.propTypes = {
    value: PropTypes.string,
    sx: PropTypes.object
};

export default SummaryCardOverview;