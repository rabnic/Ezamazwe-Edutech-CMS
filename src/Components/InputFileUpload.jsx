import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, InputLabel } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: "auto",
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function InputFileUpload({ handleFileChange, label }) {
    return (
        // <Button variant="contained"
        //     sx={{
        //         backgroundColor: "#1C3F53",
        //         width: { sm: "150px", md: "200px", lg: "230px" },
        //         borderRadius: 20, minWidth: "150px",
        //         height: "36.5px"
        //     }}
        //     startIcon={<CloudUploadIcon />}
        // >
        //     Upload file
        //     <VisuallyHiddenInput type="file" multiple={true}
        //         onChange={handleFileChange} />
        // </Button>
        <Box sx={{ width: "100%", height: "auto" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
            <Box sx={{ width: "100%", backgroundColor: "#d9d9d9", display: "flex", alignItems: "center", height: "45px", borderRadius: "10px" }}>
                {/* <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ height: "45px" }}>
                    Upload file
                    <VisuallyHiddenInput type="file" multiple={true} onChange={handleFileChange} />
                </Button> */}
                <Button component="label" variant="contained" sx={{ height: "45px" }}>
                    Choose File
                    <VisuallyHiddenInput type="file" multiple={true} onChange={handleFileChange} />
                </Button>
            </Box>
        </Box>


    );
}