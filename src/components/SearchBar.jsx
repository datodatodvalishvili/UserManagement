import React from "react";
import { Grid, Input, InputAdornment, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { selectSearchText, setSearchText } from "../state/usersSlice";
import { useDispatch, useSelector } from "react-redux";

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
            <SearchIcon color="primary" />
          </InputAdornment>
        }
      />
    </Grid>
  );
}
