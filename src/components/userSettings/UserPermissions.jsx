import React from "react";
import { Grid, Stack, Switch, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import PermissionsAccordion from "./PermissionsAccordion";
import { selectUserDetails, toggleField } from "../../state/userDetailsSlice";

export default function UserPermissions() {
  const user = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  return (
    <Grid sx={{ paddingRight: 10 }} item xs={4}>
      <Stack>
        <Stack justifyContent="space-between" direction="row">
          <Typography variant="h3">Permissions</Typography>
          <Typography color={!user.status ? "lightgray" : "black"} variant="h7">
            {user.role}
          </Typography>
        </Stack>
        <Stack
          sx={{ marginTop: 7 ,marginBottom:3 }}
          justifyContent="space-between"
          direction="row"
        >
          <Typography color={!user.status ? "lightgray" : "black"} variant="h7">
            <b>Super admin</b>
          </Typography>
          <Switch
            onChange={() => dispatch(toggleField("superAdmin"))}
            checked={user.superAdmin}
            disabled={!user.status}
          />
        </Stack>
        {user.permissionGroups &&
          user.permissionGroups.map((permissionGroup) => (
            <PermissionsAccordion
              key={permissionGroup.id}
              permissionGroup={permissionGroup}
            />
          ))}
      </Stack>
    </Grid>
  );
}
