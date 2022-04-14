import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import UserForm from "./userForm/UserForm";

export default function AddUserDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        color="primary"
        sx={{
          backgroundColor: 'primary.main',
          width: 80,
          height: 80,
          marginTop: -5,
          marginLeft: 15,
        }}
        onClick={handleClickOpen}
      >
        <AddIcon color="white" sx={{ width: 50, height: 50 }} />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite New User</DialogTitle>
        <DialogContent sx={{ margin: 5 }}>
          <UserForm handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
