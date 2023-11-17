import InputLabel from '@mui/material/InputLabel';
import { Box, IconButton, InputAdornment, Link, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';


export default function TextFields({ label, type = "text", errorStatus, errorMessage, state, setState }) {

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
        </Box>
    )
}


export const TextFieldPassword = ({ label, errorStatus, errorMessage, setState, isForgot = true }) => {
  const navigate = useNavigate()



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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
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
                <Link href="ResetPassword" style={{ width: "100%", textAlign: "right", cursor: "pointer", fontSize: "16px", fontWeight: "400",marginTop: "10px" }}>
                    Forgot Your password?
                </Link>
            }
        </Box>
    )
}