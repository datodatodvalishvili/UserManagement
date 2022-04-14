import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Grid } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import UserInfo from "../components/userSettings/UserInfo";
import UserProfileForm from "../components/userSettings/UserProfileForm";
import UserPermissions from "../components/userSettings/UserPermissions";
import TopBar from "../components/TopBar";
import { addUserDetails } from "../state/userDetailsSlice";

export default function UserSettings() {
  const dispatch = useDispatch();
  const userID = useParams().userID;
  const user = useSelector((state) => {
    const foundIndex = state.users.users.findIndex((user) => user.id == userID);
    return state.users.users[foundIndex];
  });
  useEffect(() => {
    if (user) dispatch(addUserDetails(user));
  }, [user]);

  return (
    <Box>
      <TopBar title="User Setup" hasSearchBar={false} />
      <Avatar sx={{ width: 80, height: 80, marginTop: -5, marginLeft: 15 }}>
        <SettingsIcon
          sx={{ width: 50, height: 50,}}
          color="white"
        />
      </Avatar>
      <Grid container spacing={2}>
        <UserInfo />
        <UserProfileForm />
        <UserPermissions />
      </Grid>
    </Box>
  );
}
