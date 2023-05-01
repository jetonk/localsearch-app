import { useState, useEffect } from "react";
import { Container, Grid, Card, Box } from "@mui/material";
import { PlaceDetailsRow } from "components/PlaceDetailsRow";
import { Spinner } from "components/Spinner/index";
import { ErrorMessage } from "components/ErrorMessage/index";
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

  return (
    <Container>
      <Card sx={{ padding: "15px" }}>
        <Box className="title">{place.displayed_what}</Box>
        <Grid container>
          <PlaceDetailsRow label="Address" value={place.displayed_where} />
          <PlaceDetailsRow
            label={place.contacts.phone.label}
            value={place.contacts.phone.value}
          />
          <PlaceDetailsRow
            label={place.contacts.url.label}
            value={place.contacts.url.value}
          />
        </Grid>
      </Card>
    </Container>
  );
}
