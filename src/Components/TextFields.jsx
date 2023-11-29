import InputLabel from '@mui/material/InputLabel';
import { Box, Button, FormControl, IconButton, InputAdornment, Link, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { useState } from 'react';
import { Add, Visibility, VisibilityOff } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';


export default function TextFields({ label, type = "text", errorStatus, errorMessage, state, setState, isOutComes = true, addOutcomes }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "300px", alignItems: "flex-start" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
            <OutlinedInput value={state} type={type} required placeholder="Enter" variant="outlined" sx={{
                width: "100%", height: "50px", fontSize: "16px", borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.light",
                    borderWidth: 2
                },
                "&:hover > .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main"
                }
            }} onChange={(e) => setState(e.target.value)} />
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null}
            {
                isOutComes &&
                 <Button variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", width: "100%", marginTop: "5px", justifyContent: "flex-end", color: "primary.main" }} onClick={() => {
                    addOutcomes(prev => {
                        return [...prev, state]
                    })
                }}>
                    <Add />
                    Add More
                </Button> 

            // <Button variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", width: "100%", marginTop: "5px", justifyContent: "flex-end", color: "primary.main" }} onClick={() => {
            //     addOutcomes(prev => {
            //         return [...prev, state]
            //     })
            // }}>
            //     <Add />
            //     Save
            // </Button>
            }
        </Box>
    )
}


export function TextAreas({ label, type = "text", errorStatus, errorMessage, state, setState, }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "300px", alignItems: "flex-start" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
            <OutlinedInput value={state} type={type} required placeholder="Enter" variant="outlined" sx={{
                width: "100%", height: "100px", fontSize: "16px", borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.light",
                    borderWidth: 2
                },
                "&:hover > .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main"
                }
            }} onChange={(e) => setState(e.target.value)} />
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null}
        </Box>
    )
}

export function DocumentField({ label, type = "text", errorStatus, errorMessage, state, setState, }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "300px", alignItems: "flex-start" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
            <OutlinedInput value={state} type={type} required placeholder="Enter" variant="outlined" sx={{
                width: "70%", height: "40px", fontSize: "16px", borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.light",
                    borderWidth: 2
                },
                "&:hover > .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main"
                }
            }} onChange={(e) => setState(e.target.value)} />
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null}
        </Box>
    )
}

export function SelectField({ label, type = "text", errorStatus, errorMessage, state, setState, inputLabel }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "300px", alignItems: "flex-start" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
            <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    sx={{
                        // height: "50px",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.light",
                            borderWidth: 2
                        },
                        "&:hover > .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main"
                        },
                        height: "50px"
                    }}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                // value={age}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>


            </FormControl>
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null}
        </Box>
    )
}


export const TextFieldPassword = ({ label, errorStatus, errorMessage, setState, isForgot = true }) => {



    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);



    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "auto", position: "relative", width: "100%", minWidth: "300px" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: 18, textAlign: "left" }}>{label}</InputLabel>
            <OutlinedInput type={showPassword ? 'text' : 'password'}
                required
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                placeholder={`${label}`} variant="outlined" sx={{
                    width: "100%", height: "50px", fontSize: "16px", borderRadius: "10px", borderColor: "primary.light", "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.light",
                        borderWidth: 2

                    },
                    "&:hover > .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main"
                    }
                }} onChange={(e) => setState(e.target.value)}
            />
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: 12, marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null
            }
            {
                isForgot &&
                <Link href="reset-password" style={{ width: "100%", textAlign: "right", cursor: "pointer", fontSize: "16px", fontWeight: "400", marginTop: "10px" }}>
                    Forgot Your password?
                </Link>
            }
        </Box>
    )
}