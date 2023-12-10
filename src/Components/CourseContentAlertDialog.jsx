import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialogCourseContent({ message, setIsAddMoreLessons, isAlertDialogOpen, setIsAlertDialogOpen, setOpenModal, setCourseDocumentId, setNewLesson, setHideBox, setShowBox }) {

    const handleIsConfirmed = () => {
        setIsAddMoreLessons(true);
        setNewLesson("")
        setHideBox(true)
        setShowBox(false)
        handleClose()
    };
    const handleNotConfirmed = () => {
        setIsAddMoreLessons(false)
        setNewLesson("")
        setHideBox(true)
        setShowBox(false)
        setCourseDocumentId("")
        setOpenModal(false)
        handleClose()
    };

    const handleClose = () => {
        setIsAlertDialogOpen(false);
    };


    return (
        <Dialog
            open={isAlertDialogOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add More Lessons?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleNotConfirmed} autoFocus>No</Button>
                <Button onClick={handleIsConfirmed}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
}
