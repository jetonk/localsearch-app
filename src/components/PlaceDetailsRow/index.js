import { PropTypes } from "prop-types";
import { Grid, Box } from "@mui/material";
import "./styles.css";

export function PlaceDetailsRow({ label, value }) {
  return (
    <Grid item xs={6} className="placeRow">
      <Box className="label">{label}</Box>
      <HyperLink label={label} value={value} />
    </Grid>
  );
}
PlaceDetailsRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function HyperLink({ label, value }) {
  if (label === "Website") {
    return (
      <Box>
        <a href={value}>{value}</a>
      </Box>
    );
  }
  if (label === "Phone") {
    const phoneNumbers = value.split(", ");
    if (phoneNumbers.length > 1) {
      return phoneNumbers.map((phone) => (
        <Box key={phone}>
          <a href={`tel:${phone}`}>{phone}</a>
        </Box>
      ));
    }
    return (
      <Box>
        <a href={`tel:${value}`}>{value}</a>
      </Box>
    );
  }
  return <Box>{value}</Box>;
}

HyperLink.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
