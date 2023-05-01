import { Grid, Box } from "@mui/material";
import { PropTypes } from "prop-types";

export function ErrorMessage({ error }) {
  return (
    <Grid item xs={12}>
      <Box className="errorContainer">{error}</Box>
    </Grid>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};
