import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

import useTableColumns from "./useTableColumns";
import { selectSearchText, selectUsers } from "../state/usersSlice";
import { Box } from "@mui/material";

export default function UserTable() {
  const [pageSize, setPageSize] = useState(5);
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
    <Box sx={{ paddingLeft: 20, paddingRight: 10, paddingTop: 3, height: 650 }}>
      <DataGrid
        sx={{ border: "none" }}
        rowHeight={100}
        rows={users.filter(handleFilter)}
        columns={tableColumns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
      />
    </Box>
  );
}
