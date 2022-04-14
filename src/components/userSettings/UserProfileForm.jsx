import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { selectUserDetails, toggleField } from "../../state/userDetailsSlice";
import { validationSchema } from "./validationSchema";
import { updateUser } from "../../state/usersSlice";

export default function UserProfileForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserDetails);
  return (
    <Grid item xs={4}>
      <Formik
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(
            updateUser({
              ...user,
              ...values,
            })
          );
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, errors, isValid }) => (
          <>
            <Stack sx={{ height: 500, paddingRight: 40 }}>
              <Typography variant="h3">Details</Typography>
              <Stack sx={{ marginTop: 7 }} direction="row">
                <Switch
                  checked={user.status}
                  onChange={() => dispatch(toggleField("status"))}
                  sx={{ marginLeft: -7 }}
                />
                <Typography variant="h6">
                  {user.status ? (
                    <>
                      The user is <b>Active</b>
                    </>
                  ) : (
                    <>
                      The user is <b>Inactive</b>
                    </>
                  )}
                </Typography>
              </Stack>
              <TextField
                id="firstName"
                label="* First Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange("firstName")}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
                value={values.firstName}
                sx={{ marginTop: 5 }}
                disabled={!user.status}
              />
              <TextField
                id="lastName"
                label="* Last Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange("lastName")}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
                value={values.lastName}
                sx={{ marginTop: 2 }}
                disabled={!user.status}
              />
              <FormControl
                disabled={!user.status}
                sx={{ marginTop: 2 }}
                fullWidth
                variant="standard"
              >
                <InputLabel htmlFor="outlined-role">* Role</InputLabel>
                <Select
                  name="outlined-role"
                  label="role"
                  variant="standard"
                  fullWidth
                  onChange={handleChange("role")}
                  value={values.role}
                >
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"User"}>User</MenuItem>
                </Select>
                <FormHelperText error></FormHelperText>
              </FormControl>
            </Stack>
            {user.status && (
              <Button
                disabled={!isValid}
                onClick={() => handleSubmit()}
                sx={{
                  padding: 3,
                  marginTop: 7,
                }}
                variant="contained"
                size="large"
              >
                Save Changes
              </Button>
            )}
          </>
        )}
      </Formik>
    </Grid>
  );
}
