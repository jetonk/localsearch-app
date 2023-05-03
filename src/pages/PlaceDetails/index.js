import { useState, useEffect } from "react";
import { Container, Grid, Card, Box } from "@mui/material";
import { Header } from "components/Header/index";
import { PlaceDetailsRow } from "components/PlaceDetailsRow";
import { Spinner } from "components/Spinner/index";
import { ErrorMessage } from "components/ErrorMessage";
import { OpeningHours } from "components/OpeningHours";
import { getPlaceById } from "services/placesApi";
import { useParams } from "react-router-dom";

import "./styles.css";

export default function PlaceDetails() {
  const { placeId } = useParams();
  const [place, setPlace] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect used to fetch Places through an API request,
  // and set places into a localstate places
  useEffect(() => {
    setIsLoading(true);
    getPlaceById(placeId)
      .then((data) => {
        setPlace(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [placeId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }
  const shifts = Object.keys(place.opening_hours);
  const { opening_hours } = place;

  return (
    <Container>
      <Header />
      <Card className="placeCard">
        <Box className="title">{place.displayed_what}</Box>
        <Grid container>
          <Box className="left">
            <PlaceDetailsRow label="Address" value={place.displayed_where} />
            <PlaceDetailsRow
              label={place.contacts.url.label}
              value={place.contacts.url.value}
            />
            <PlaceDetailsRow
              label={place.contacts.phone.label}
              value={place.contacts.phone.value}
            />
          </Box>
          <Box className="right">
            <OpeningHours openingHours={opening_hours} />
          </Box>
        </Grid>
      </Card>
    </Container>
  );
}
