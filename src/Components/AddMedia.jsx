import { Box, InputLabel, OutlinedInput } from "@mui/material";

export default function MediaFields({ label, type = "text", errorStatus, errorMessage, state, setState, }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "300px", alignItems: "flex-start" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
            <OutlinedInput multiple={true} value={state} type={type} required placeholder="Enter" variant="outlined" sx={{
                width: "100%", height: "50px", fontSize: "16px", borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.light",
                    borderWidth: 2
                },
                "&:hover > .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main"
                }
            }} onChange={(e) => setState(e.target.value)}
            />
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null}
        </Box>
    )
}
