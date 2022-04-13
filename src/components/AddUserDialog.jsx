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
        sx={{ width: 100, height: 100, marginTop: -6.3, marginLeft: 15 }}
        onClick={handleClickOpen}
      >
        <AddIcon sx={{ width: 100, height: 100 }} color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite New User</DialogTitle>
        <DialogContent sx={{ margin: 5 }}>
          <UserForm handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
