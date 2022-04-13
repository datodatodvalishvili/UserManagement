import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid, Stack, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { selectUserDetails } from "../../state/userDetailsSlice";

export default function UserInfo() {
  const user = useSelector(selectUserDetails);
  return (
    <Grid item xs={4} style={{ textAlign: "center" }}>
      <Stack sx={{ height: 500 }} alignItems={"center"}>
        <AccountCircleOutlinedIcon sx={{ width: 300, height: 300 }} />
        <Typography variant="h7">
          {user.status ? <>UPLOAD A PHOTO</> : <span>&#8203;</span>}
        </Typography>
        <Typography
          color={!user.status ? "lightgray" : "black"}
          sx={{ marginTop: 3 }}
          variant="h3"
        >
          {user.firstName}
        </Typography>
        <Typography color={!user.status ? "lightgray" : "black"} variant="h3">
          {user.lastName}
        </Typography>
        <Typography color={!user.status ? "lightgray" : "black"} variant="h7">
          {user.email}
        </Typography>
      </Stack>
      {user.status && (
        <Button
          sx={{ textTransform:"none",padding: 3, marginTop: 7, borderRadius: 30 }}
          variant="contained"
          size="large"
        >
          Resend the invite
        </Button>
      )}
    </Grid>
  );
}
