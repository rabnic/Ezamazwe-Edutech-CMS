import React, { useState } from 'react';
import { Button as ButtonMUI, CircularProgress, IconButton, List, ListItem, ListItemText, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { addNewGradesToDB } from '../services/firebase';
import TextFields from './TextFields';

export default function AddNewGradeDialog({ categoryID, refreshData, isShowGradeDialog, setIsShowGradeDialog }) {
    const [isLoading, setIsloading] = useState(false);
    const [newGrades, setNewGrades] = useState([]);
    const [newGradeText, setNewGradeText] = useState("")

    const addNewGrade = () => {
        if (newGradeText.trim()) {
            setNewGrades(prev => [...prev, newGradeText])
            setNewGradeText("")
        }
    }

    const deleteNewGrade = (index) => {
        const search = newGrades[index]
        setNewGrades(prev => prev.filter(elem => elem !== search))
    }

    const saveGrades = async () => {
        try {
            setIsloading(true);
            await addNewGradesToDB(categoryID, newGrades)
                .then((res) => {
                    refreshData();
                    setIsShowGradeDialog(false)
                })

        } catch (error) {
            console.log("Error saving grades", error)
        } finally {
            setIsloading(true);
        }
    }

    const clearAll = () => {
        setNewGradeText("")
        setNewGrades([])
        setIsloading(false)
    }

    return (
        <Dialog
            open={isShowGradeDialog}
            onClose={setIsShowGradeDialog}
            maxWidth={"sm"}
            className='paperWidthSm'
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();

                },
            }}
        >
            <DialogTitle>Add New Grade(s)</DialogTitle>
            <DialogContent>

                <Stack direction="row" spacing={1} justifyContent="center" alignItems="flex-end">

                    <TextFields isOutComes={false} placeholder='E.g Grade 1' label={"Grade Name:"} errorStatus={""} errorMessage={""} setState={setNewGradeText} state={newGradeText} />

                    <IconButton aria-label="add" onClick={addNewGrade}>
                        <AddIcon color='primary' fontSize='large' />
                    </IconButton>
                </Stack>
                <Stack flexWrap={"wrap"} direction="row" minWidth={"400px"} spacing={2} sx={{ marginTop: "10px" }}>

                </Stack>
                <List dense={true} sx={{ padding: "0", display: "flex", flexDirection: "row", gap: "5px", width: "400px", flexWrap: "wrap" }} >

                    {
                        newGrades.length > 0 && newGrades.map((grade, index) =>
                        (
                            <ListItem
                                sx={{ width: "fit-content", backgroundColor: "#eee", borderRadius: "3px" }}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteNewGrade(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={grade}
                                    sx={{ width: "fit-content" }}
                                />
                            </ListItem>
                        ))
                    }
                </List>
            </DialogContent>
            <DialogActions>
                <ButtonMUI onClick={() => { setIsShowGradeDialog(false) }}>Cancel</ButtonMUI>
                <ButtonMUI endIcon={isLoading ? <CircularProgress thickness={6} color="primary" size={18} /> : null} disabled={newGrades.length === 0} onClick={saveGrades}>
                    {isLoading ? null : "Save"}
                </ButtonMUI>

            </DialogActions>
        </Dialog>
    );
}
