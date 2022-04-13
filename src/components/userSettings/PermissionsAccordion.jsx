import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch, useSelector } from "react-redux";

import {
  selectUserDetails,
  toggleChildPermission,
  toggleParentPermission,
} from "../../state/userDetailsSlice";

export default function PermissionsAccordion({ permissionGroup }) {
  const user = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  return (
    <Accordion
      sx={{
        backgroundColor: "#ebebeb",
        boxShadow: "none",
      }}
    >
      <Stack justifyContent="space-between" direction="row">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <KeyboardArrowDownIcon />
          <Typography color={!user.status ? "lightgray" : "black"}>
            <b>{permissionGroup.name}</b>
          </Typography>
        </AccordionSummary>
        <AccordionActions>
          <Switch
            disabled={!user.status}
            checked={permissionGroup.permissionActive}
            onChange={() =>
              dispatch(toggleParentPermission(permissionGroup.id))
            }
          />
        </AccordionActions>
      </Stack>
      <AccordionDetails sx={{ marginLeft: 5 }}>
        {permissionGroup.permissions &&
          permissionGroup.permissions.map((permission) => (
            <Stack
              key={permission.id}
              justifyContent="space-between"
              direction="row"
            >
              <Typography
                color={!user.status ? "lightgray" : "black"}
                variant="h7"
              >
                <CircleIcon
                  color={!permission.permissionActive ? "error" : "primary"}
                  fontSize="10"
                  sx={{ marginRight: 1 }}
                />
                {!permission.permissionActive ? (
                  <>{permission.name}</>
                ) : (
                  <b>{permission.name}</b>
                )}
              </Typography>
              <Switch
                disabled={!user.status}
                checked={permission.permissionActive}
                onChange={() =>
                  dispatch(
                    toggleChildPermission({
                      childID: permission.id,
                      parentID: permissionGroup.id,
                    })
                  )
                }
              />
            </Stack>
          ))}
      </AccordionDetails>
    </Accordion>
  );
}
