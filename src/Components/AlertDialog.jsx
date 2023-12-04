import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({message,setIsDeleteConfirmed,isAlertDialogOpen, setIsAlertDialogOpen, deleteAdmin, adminId}) {

  const handleIsConfirmed = () => {
    setIsDeleteConfirmed(true);
    deleteAdmin(adminId)
    handleClose()
  };
  const handleNotConfirmed = () => {
    setIsDeleteConfirmed(false)
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
          {"Delete Admin?"}
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
