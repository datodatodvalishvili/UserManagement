import React from "react";
import { Box } from "@mui/material";

import UserTable from "../components/UserTable";
import AddUserDialog from "../components/AddUserDialog";
import TopBar from "../components/TopBar";
import DeleteDialog from "../components/DeleteDialog";

export default function Main() {
  return (
    <Box>
      <TopBar title="Project Accses" />
      <AddUserDialog />
      <UserTable />
      <DeleteDialog />
    </Box>
  );
}
