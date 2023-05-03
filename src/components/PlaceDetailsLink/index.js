import { PropTypes } from "prop-types";
import { Grid, Box } from "@mui/material";

const LABELS = {
  phone: "Phone",
  url: "Website",
};

export function PlaceDetailsLink({ contacts }) {
  return contacts.map((contact) => {
    const { type, phone, url } = contact;
    const label = LABELS[type];

    let link = `tel:${phone}`;
    let value = phone;

    if (type === "url") {
      link = url;
      value = url;
    }

    return (
      <Grid item xs={6} className="placeRow" key={phone || url}>
        <Box className="label">{label}</Box>
        <a href={link} target="_blank">
          {value}
        </a>
      </Grid>
    );
  });
}

PlaceDetailsLink.propTypes = {
  contacts: PropTypes.array.isRequired,
};
