import { PropTypes } from "prop-types";
import { Grid, Box } from "@mui/material";

const LABELS = {
  phone: "Phone",
  url: "Website",
};

export function HyperLink({ contacts }) {
  return contacts.reverse().map((contact) => {
    const { type, phone, url } = contact;

    return (
      <Grid item xs={6} className="placeRow">
        <Box className="label">{LABELS[type]}</Box>
        {type === "url" && (
          <a href={url} target="_blank">
            {url}
          </a>
        )}
        {type === "phone" && (
          <a href={`tel:${phone}`} target="_blank">
            {phone}
          </a>
        )}
      </Grid>
    );
  });
}

HyperLink.propTypes = {
  contacts: PropTypes.array.isRequired,
};
