import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export function SearchBar() {
  return (
    <TextField
      fullWidth
      placeholder="Search by name, address"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
