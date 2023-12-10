import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Stack,
    SvgIcon,
    Typography,
    styled,
    useTheme
} from '@mui/material';
// import { Chart } from 'src/components/chart';
import { Chart } from './Chart'

const useChartOptions = (labels) => {
    const theme = useTheme();

    return {
        chart: {
            background: 'transparent'
        },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.warning.main
        ],
        dataLabels: {
            enabled: false
        },
        labels,
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            },
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};

const iconMap = {
    Desktop: (
        <SvgIcon>
            <ComputerDesktopIcon />
        </SvgIcon>
    ),
    Tablet: (
        <SvgIcon>
            <DeviceTabletIcon />
        </SvgIcon>
    ),
    Phone: (
        <SvgIcon>
            <PhoneIcon />
        </SvgIcon>
    )
};

const TrafficOverview = (props) => {
    const { chartSeries, labels, sx } = props;
    const chartOptions = useChartOptions(labels);

    const CustomCard = styled(Card)({
        boxShadow: 'none',
        borderRadius: "15px",
    });

    return (
        <CustomCard sx={{
            ...sx, borderColor: "greys.dark", borderStyle: "solid",
            borderWidth: "1px"
        }}>
            <CardHeader title="Traffic Source" />
            <CardContent>
                <Chart
                    height={300}
                    options={chartOptions}
                    series={chartSeries}
                    type="donut"
                    width="100%"
                />
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    {chartSeries.map((item, index) => {
                        const label = labels[index];

                        return (
                            <Box
                                key={label}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                {iconMap[label]}
                                <Typography
                                    sx={{ my: 1 }}
                                    variant="h6"
                                >
                                    {label}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    variant="subtitle2"
                                >
                                    {item}%
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>
            </CardContent>
        </CustomCard>
    );
};

TrafficOverview.propTypes = {
    chartSeries: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    sx: PropTypes.object
};

export default TrafficOverview;