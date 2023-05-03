import { PropTypes } from "prop-types";
import { Grid, Box } from "@mui/material";
import { HyperLink } from "components/HyperLink";
import "./styles.css";

export function PlaceDetailsRow({ label, value }) {
  return (
    <Grid item xs={6} className="placeRow">
      <Box className="label">{label}</Box>
      <Box>{value}</Box>
    </Grid>
  );
}

PlaceDetailsRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
