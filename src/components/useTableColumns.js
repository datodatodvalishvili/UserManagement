import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Box, Grid, Switch, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyIcon from "@mui/icons-material/Key";

import { setDeleteID, toggleUserStatus } from "../state/usersSlice";

export default function useTableColumns() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const delUser = useCallback(
    (id) => () => {
      dispatch(setDeleteID(id));
    },
    [dispatch]
  );

  const handleToggle = useCallback(
    ({ id }) =>
      () => {
        dispatch(toggleUserStatus(id));
      },
    [dispatch]
  );

  const userSettings = useCallback(
    (id) => () => {
      navigate(`/user/${id}`);
    },
    [navigate]
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
          <AccountCircleRoundedIcon
            fontSize="large"
            color={!params.row.status ? "disabled" : "standardText"}
          />
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
            color={!params.row.status ? "disabled.main" : "standardText.main"}
            variant="h6"
          >
            <b>{params.value.name}</b>
          </Typography>
          <Typography
            color={!params.row.status ? "disabled.main" : "standardText.main"}
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
        <Grid spacing={2} container>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            item
            xs={3}
          >
            {params.value === "Admin" && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 50,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "secondary.main",
                }}
              >
                <KeyIcon color="white" />
              </Box>
            )}
          </Grid>
          <Grid item xs={9}>
            <Typography
              color={!params.row.status ? "disabled.main" : "standardText.main"}
              variant="h7"
            >
              <b>{params.value}</b>
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
        <Switch
          color="primary"
          checked={params.value}
          onChange={handleToggle(params)}
        />
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
