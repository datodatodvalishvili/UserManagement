import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

export default function TopBar({ title, hasSearchBar = true }) {
  return (
    <Paper
      elevation={3}
      sx={{ paddingTop: 14, paddingLeft: 30, paddingBottom: 7 }}
    >
      <Grid container spacing={2}>
        <Grid item md={9} xs={5}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        {hasSearchBar && <SearchBar />}
      </Grid>
    </Paper>
  );
}
