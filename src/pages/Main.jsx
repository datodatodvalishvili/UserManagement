import React from "react";
import { Box } from "@mui/material";

import UserTable from "../components/UserTable";
import AddUserDialog from "../components/AddUserDialog";
import TopBar from "../components/TopBar";

export default function Main() {
  return (
    <Box>
      <TopBar title="Project Accses" />
      <AddUserDialog />
      <UserTable />
    </Box>
  );
}
