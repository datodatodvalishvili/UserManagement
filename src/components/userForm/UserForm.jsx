import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import { validationSchema } from "./validationSchema";
import { addUser } from "../../state/usersSlice";

export default function UserForm({ handleClose }) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        role: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(addUser(values));
        handleClose();
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <>
          <Grid container spacing={3}>
            <Grid item sx={{ marginTop: 3 }} xs={1}>
              <PersonIcon fontSize="small" />
            </Grid>
            <Grid item xs={5.5}>
              <TextField
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                value={values.firstName}
              />
            </Grid>
            <Grid item xs={5.5}>
              <TextField
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                value={values.lastName}
              />
            </Grid>
            <Grid item sx={{ marginTop: 3 }} xs={1}>
              <AlternateEmailIcon fontSize="small" />
            </Grid>
            <Grid item xs={11}>
              <TextField
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                value={values.email}
              />
            </Grid>
            <Grid item sx={{ marginTop: 3 }} xs={1}>
              <KeyIcon fontSize="small" />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-role">Role</InputLabel>
                <Select
                  name="outlined-role"
                  label="role"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange("role")}
                  onBlur={handleBlur("role")}
                  error={touched.role && Boolean(errors.role)}
                  value={values.role}
                >
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"User"}>User</MenuItem>
                </Select>
                <FormHelperText error>
                  {touched.role && errors.role}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginTop: 10 }}>
            <Grid item xs={6}>
              <Button
                disabled={Object.keys(touched).length === 0 || !isValid}
                onClick={() => handleSubmit()}
                variant="contained"
                size="large"
              >
                Send Invite
              </Button>
            </Grid>
            <Grid item xs={6}>
              {Object.keys(touched).length === 0 || !isValid ? (
                <Typography variant="h6" color="red">
                  Fill all the fields
                </Typography>
              ) : (
                <Typography variant="h6" color="green">
                  Good to go
                </Typography>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Formik>
  );
}
