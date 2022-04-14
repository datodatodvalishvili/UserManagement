import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyIcon from "@mui/icons-material/Key";

import { selectUserDetails } from "../../state/userDetailsSlice";

export default function UserInfo() {
  const user = useSelector(selectUserDetails);
  return (
    <Grid item xs={4} style={{ textAlign: "center" }}>
      <Stack sx={{ height: 500 }} alignItems={"center"}>
        <Stack
          sx={{
            marginBottom: 5,
          }}
        >
          <AccountCircleOutlinedIcon sx={{ width: 300, height: 300 }} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: 20,
              width: 80,
              height: 50,
              alignSelf: "flex-end",
              marginTop: -12,
              marginRight: 5,
              backgroundColor: "secondary.main",
            }}
          >
            <KeyIcon color="white" />
          </Box>
        </Stack>
        <Typography color="disabled.main" variant="h7">
          {user.status ? <>UPLOAD A PHOTO</> : <span>&#8203;</span>}
        </Typography>
        <Typography
          color={!user.status ? "disabled.main" : "standardText.main"}
          sx={{ marginTop: 3 }}
          variant="h3"
        >
          {user.firstName}
        </Typography>
        <Typography
          color={!user.status ? "disabled.main" : "standardText.main"}
          variant="h3"
        >
          {user.lastName}
        </Typography>
        <Typography
          color={!user.status ? "disabled.main" : "standardText.main"}
          variant="h7"
        >
          {user.email}
        </Typography>
      </Stack>
      {user.status && (
        <Button
          color="secondary"
          sx={{
            padding: 3,
            marginTop: 7,
          }}
          variant="contained"
          size="large"
        >
          Resend the invite
        </Button>
      )}
    </Grid>
  );
}
