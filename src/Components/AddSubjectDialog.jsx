import React, { useState } from 'react';
import { Button as ButtonMUI, CircularProgress, IconButton, List, ListItem, ListItemText, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { addNewSubjectsToDB } from '../services/firebase';
import TextFields from './TextFields';

export default function AddNewSubjectDialog({ categoryID, gradeKey, refreshData, isShowSubjectDialog, setIsShowSubjectDialog }) {
    const [isLoading, setIsloading] = useState(false);
    const [newSubjects, setNewSubjects] = useState([]);
    const [newSubjectText, setNewSubjectText] = useState("")
    console.log("key-----", gradeKey)
    const addNewSubject = () => {
        if (newSubjectText.trim()) {
            setNewSubjects(prev => [...prev, newSubjectText])
            setNewSubjectText("")
        }
    }

    const deleteNewSubject = (index) => {
        const search = newSubjects[index]
        setNewSubjects(prev => prev.filter(elem => elem !== search))
    }

    const saveSubjects = async () => {
        try {
            setIsloading(true);
            await addNewSubjectsToDB(categoryID, gradeKey, newSubjects)
                .then((res) => {
                    refreshData();
                    setIsShowSubjectDialog(false)
                })

        } catch (error) {
            console.log("Error saving subjects", error)
        } finally {
            setIsloading(true);
        }
    }

    const clearAll = () => {
        setNewSubjectText("")
        setNewSubjects([])
        setIsloading(false)
    }

    return (
        <Dialog
            open={isShowSubjectDialog}
            onClose={setIsShowSubjectDialog}
            maxWidth={"sm"}
            className='paperWidthSm'
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();

                    // setIsShowGradeDialog(false);
                },
            }}
        >
            <DialogTitle>Add New Subject(s)</DialogTitle>
            <DialogContent>

                <Stack direction="row" spacing={1} justifyContent="center" alignItems="flex-end">

                    <TextFields isOutComes={false} placeholder='E.g Mathematics' label={"Subject Name:"} errorStatus={""} errorMessage={""} setState={setNewSubjectText} state={newSubjectText} />

                    <IconButton aria-label="add" onClick={addNewSubject}>
                        <AddIcon color='primary' fontSize='large' />
                    </IconButton>
                </Stack>
                <Stack flexWrap={"wrap"} direction="row" minWidth={"400px"} spacing={2} sx={{ marginTop: "10px" }}>

                </Stack>
                <List dense={true} sx={{ padding: "0", display: "flex", flexDirection: "row", gap: "5px", width: "400px", flexWrap: "wrap" }} >

                    {
                        newSubjects.length > 0 && newSubjects.map((grade, index) =>
                        (
                            <ListItem
                                sx={{ width: "fit-content", backgroundColor: "#eee", borderRadius: "3px" }}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteNewSubject(index)}>
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
                <ButtonMUI onClick={() => { setIsShowSubjectDialog(false) }}>Cancel</ButtonMUI>
                <ButtonMUI endIcon={isLoading ? <CircularProgress thickness={6} color="primary" size={18} /> : null} disabled={newSubjects.length === 0} onClick={saveSubjects}>
                    {isLoading ? null : "Save"}
                </ButtonMUI>
                {/* <Button text={"Save"} buttonFunction={() => { }} isIconButton={true} iconType='loader' /> */}

            </DialogActions>
        </Dialog>
    );
}
