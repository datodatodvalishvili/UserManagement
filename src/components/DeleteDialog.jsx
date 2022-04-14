import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";

import { deleteUser, selectDeleteID, setDeleteID } from "../state/usersSlice";

export default function DeleteDialog() {
  const dispatch = useDispatch();
  const userID = useSelector(selectDeleteID);
  const user = useSelector((state) => {
    const foundIndex = state.users.users.findIndex((user) => user.id == userID);
    return state.users.users[foundIndex];
  });

  const handleClose = () => {
    dispatch(setDeleteID(0));
  };

  const handleDelete = () => {
    dispatch(deleteUser(userID));
    handleClose();
  };

  if (!userID) return <></>;
  else
    return (
      <Dialog open={true} onClose={handleClose}>
        <DialogContent sx={{ marginTop: 5, paddingLeft: 10, paddingRight: 10 }}>
          <Typography variant="h3">Delete User</Typography>
          <Stack
            sx={{ marginTop: 7 }}
            direction="row"
            justifyItems="center"
            alignItems="center"
          >
            <PersonIcon fontSize="small" />
            <Typography sx={{ marginLeft: 3, marginRight: 20 }} variant="h7">
              {user.firstName} {user.lastName}
            </Typography>
            {user.status ? (
              <Typography variant="h7" color="primary">
                <b>Active User</b>
              </Typography>
            ) : (
              <Typography variant="h7" color="error">
                <b>Inactive User</b>
              </Typography>
            )}
          </Stack>
          <Divider sx={{ marginTop: 3 }} />
          <Button
            sx={{
              marginTop: 7,
            }}
            color="error"
            variant="contained"
            size="large"
            onClick={handleDelete}
          >
            Delete User
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    );
}
