import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';

export default function TextareaField({ state, setState, errorStatus, errorMessage, label, }) {


  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "500px", alignItems: "flex-start" }}>
      <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
      {/* <TextareaAutosize aria-label="minimum height" value={state} onChange={(e) => setState(e.target.value)} minRows={5} placeholder="Minimum 3 rows" sx={{
        width: "100%", minWidth: "550px", height: "50px", fontSize: "16px", borderRadius: "10px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.light",
          borderWidth: 2
        },
        "&:hover > .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main"
        }
      }} /> */}
      <TextField id="outlined-basic" placeholder="Email" multiline minRows="3" variant="outlined" sx={{
        width: "100%", minWidth: "150px", height: "50px", fontSize: "16px", borderRadius: "10px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.light",
          borderWidth: 2
        },
        "&:hover > .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main"
        }
      }} value={state} onChange={(e) => setState(e.target.value)} />
      {errorStatus ?
        <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
        : null}
    </Box>
  );
}