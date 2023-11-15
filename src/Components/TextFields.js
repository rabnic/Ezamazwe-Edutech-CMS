import InputLabel from '@mui/material/InputLabel';
import { Box, IconButton, InputAdornment, Link, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function TextFields({ label, errorStatus, errorMessage, setState }) {

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "300px", alignItems: "flex-start" }}>
                <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
                <OutlinedInput placeholder="Enter" variant="outlined" style={{ width: "100%", height: "50px", fontSize: "16px", borderRadius: "10px" }} onChange={(e) => setState(e.target.value)} />
                {errorStatus ?
                    <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                    : null}
            </Box>
        </>
    )
}


export const TextFieldPassword = ({ label, errorStatus, errorMessage, setState, isForgot=true }) => {


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);



    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "auto", position: "relative", width: "100%", minWidth: "300px" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: 18, textAlign: "left" }}>{label}</InputLabel>
            <OutlinedInput type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                placeholder={`${label}`} variant="outlined" sx={{ width: "100%", height: "50px", fontSize: "16px", borderRadius: "10px", borderColor: "primary.light" }} onChange={(e) => setState(e.target.value)}
            />
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: 12, marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null
            }
            {
                isForgot &&
                <Link style={{ width: "100%", textAlign: "right", cursor: "pointer", fontSize: "16px", fontWeight: "400" }}>
                    Forgot Your password?
                </Link>
            }
        </Box>
    )
}