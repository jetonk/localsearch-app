import { PropTypes } from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export function SearchBar({ handleSearch }) {
  return (
    <TextField
      fullWidth
      onInput={(e) => {
        handleSearch(e.target.value);
      }}
      placeholder="Search by name, address"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
