import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Grid, Switch, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyIcon from "@mui/icons-material/Key";

import { deleteUser, toggleUserStatus } from "../state/usersSlice";

export default function useTableColumns() {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const delUser = useCallback(
    (id) => () => {
      dispach(deleteUser(id));
    },
    []
  );

  const handleToggle = useCallback(
    ({ id }) =>
      () => {
        dispach(toggleUserStatus(id));
      },
    []
  );

  const userSettings = useCallback(
    (id) => () => {
      navigate(`/user/${id}`);
    },
    []
  );

  function getUserObject(params) {
    return {
      name: `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      email: params.row.email,
    };
  }

  const userComparator = (v1, v2) => ("" + v1.name).localeCompare(v2.name);

  return [
    {
      field: "avatar",
      type: "actions",
      renderCell: (params) => (
        <strong>
          <Avatar>
            <AccountCircleRoundedIcon />
          </Avatar>
        </strong>
      ),
    },
    {
      field: "user",
      headerName: "User",
      flex: 2,
      editable: false,
      valueGetter: getUserObject,
      sortComparator: userComparator,
      renderCell: (params) => (
        <div>
          <Typography
            color={!params.row.status ? "lightgray" : "black"}
            variant="h6"
          >
            {params.value.name}
          </Typography>
          <Typography
            color={!params.row.status ? "lightgray" : "black"}
            variant="h7"
          >
            {params.value.email}
          </Typography>
        </div>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      editable: false,
      renderCell: (params) => (
        <Grid container>
          <Grid item xs={2}>
            {params.value === "Admin" && (
              <Avatar>
                <KeyIcon />
              </Avatar>
            )}
          </Grid>
          <Grid item xs={10}>
            <Typography
              color={!params.row.status ? "lightgray" : "black"}
              variant="h6"
            >
              {params.value}
            </Typography>
          </Grid>
        </Grid>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      editable: false,
      renderCell: (params) => (
        <Switch checked={params.value} onChange={handleToggle(params)} />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      flex: 0.3,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<SettingsIcon />}
          label="User settings"
          disabled={!params.row.status}
          onClick={userSettings(params.id)}
        />,
        <GridActionsCellItem
          icon={<DeleteRoundedIcon />}
          label="Delete"
          onClick={delUser(params.id)}
        />,
      ],
    },
  ];
}
