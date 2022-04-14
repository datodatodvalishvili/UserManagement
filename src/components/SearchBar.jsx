import React from "react";
import { Grid, Input, InputAdornment, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";

import { selectSearchText, setSearchText } from "../state/usersSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText);

  return (
    <Grid item md={2}>
      <Input
        id="search-bar"
        type="text"
        placeholder="Type to filter the table"
        value={searchText}
        onChange={(event) => dispatch(setSearchText(event.target.value))}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon color="standardText" />
          </InputAdornment>
        }
      />
    </Grid>
  );
}
