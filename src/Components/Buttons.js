import { Button } from "@mui/material";

export default function button({ text, buttonFunction }) {
    return (
        <>
            <Button variant="contained" sx={{ backgroundColor: "#1C3F53", width: {sm:"150px",md:"200px",lg:"230px"}, borderRadius: 20,minWidth:"150px" }} onClick={() => buttonFunction()}>{text}</Button>
        </>
    )
}