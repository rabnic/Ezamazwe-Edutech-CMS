import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CircularProgress from '@mui/material/CircularProgress';

const Icon = {
    "down": <KeyboardArrowDownIcon />,
    "up": <KeyboardArrowUpIcon />,
    "loader": <CircularProgress thickness={6} color="white" size={18} />,
    "loaderDark": <CircularProgress thickness={6} color="primary" size={18} />
}

export default function button({ text, buttonFunction, isIconButton = false, iconType = "down", lightMode = false }) {
    return (
        <>
            <Button variant="contained"
                sx={{
                    backgroundColor: lightMode ? "white.main" : "primary.main",
                    color: lightMode ? "primary.main" : "white.main",
                    width: { sm: "200px", md: "200px", lg: "230px" },
                    borderRadius: 20, minWidth: "150px",
                    height: "36.5px",
                    '&:hover': {
                        backgroundColor: lightMode ? "greys.main" : "primary.light",
                    }
                }}
                onClick={() => buttonFunction()}
                endIcon={
                    isIconButton ?
                        lightMode ? Icon["loaderDark"] : Icon[iconType]
                        :
                        null
                }
            >
                {
                    iconType === "loader" && isIconButton ?
                        null
                        :
                        text
                }
            </Button>
        </>
    )
}