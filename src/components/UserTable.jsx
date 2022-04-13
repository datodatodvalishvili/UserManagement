import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

import useTableColumns from "./useTableColumns";
import { selectSearchText, selectUsers } from "../state/usersSlice";
import { Container } from "@mui/material";

export default function UserTable() {
  const tableColumns = useTableColumns();
  const users = useSelector(selectUsers);
  const searchText = useSelector(selectSearchText);

  function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  const searchRegex = new RegExp(
    escapeRegExp(searchText ? searchText : ""),
    "i"
  );
  const handleFilter = (user) => {
    return Object.keys(user).some((field) => {
      return searchRegex.test(user[field].toString());
    });
  };

  return (
    <Container maxWidth="xl" sx={{ height: 600 }}>
      <DataGrid
        sx={{ border: "none" }}
        rows={users.filter(handleFilter)}
        columns={tableColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Container>
  );
}
