import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function button({ text, buttonFunction, isIconButton = false, toggle = "down" }) {
    return (
        <>
            <Button variant="contained"
                sx={{
                    backgroundColor: "#1C3F53",
                    width: { sm: "150px", md: "200px", lg: "230px" },
                    borderRadius: 20, minWidth: "150px"
                }}
                onClick={() => buttonFunction()}

                endIcon={
                    isIconButton ?
                        toggle === "up" ?
                            <KeyboardArrowUpIcon />
                            :
                            <KeyboardArrowDownIcon />
                        :
                        null
                }
            >
                {text}
            </Button>
        </>
    )
}