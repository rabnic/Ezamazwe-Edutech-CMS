import InputLabel from '@mui/material/InputLabel';
import { Box, FormControl, Select} from '@mui/material';



export default function SelectField({ label, errorStatus, errorMessage, state, setState, children, setIsShowGradeDialog = null, setIsShowSubjectDialog = null, isDisabled = false }) {

    const handleSetState = (value) => {
        if (value === "addNewGrade") {
            setIsShowGradeDialog(true);
        }
        if (value === "addNewSubject") {
            setIsShowSubjectDialog(true);
        }
        setState(value)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "100%", minWidth: "300px", alignItems: "flex-start" }}>
            <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
            <FormControl variant="outlined" style={{ width: "100%", height: "50px", fontSize: "16px", borderRadius: "10px" }} disabled={isDisabled}>
                <Select
                    value={state}
                    onChange={(e) => handleSetState(e.target.value)}
                    required
                    sx={{
                        width: "100%", height: "50px", fontSize: "16px", borderRadius: "10px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.light",
                            borderWidth: 2
                        },
                        "&:hover > .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main"
                        }
                    }}
                >
                    {
                        children
                    }

                </Select>
            </FormControl>
            {errorStatus ?
                <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                : null}
        </Box>
    )
}
