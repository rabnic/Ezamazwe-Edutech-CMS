import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CircularProgress from '@mui/material/CircularProgress';

const Icon = {
    "down": <KeyboardArrowDownIcon />,
    "up": <KeyboardArrowUpIcon />,
    "loader": <CircularProgress thickness={6} color="white" size={18} />
}

export default function button({ text, buttonFunction, isIconButton = false, iconType = "down" }) {
    return (
        <>
            <Button variant="contained"
                sx={{
                    backgroundColor: "#1C3F53",
                    width: { sm: "150px", md: "200px", lg: "230px" },
                    borderRadius: 20, minWidth: "150px",
                    height: "36.5px"
                }}
                onClick={() => buttonFunction()}
                endIcon={
                    isIconButton ?
                        Icon[iconType]
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