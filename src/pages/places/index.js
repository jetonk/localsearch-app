import { useState, useEffect } from "react";
import { Container, Grid, Card, CardContent } from "@mui/material";
import { Spinner } from "components/Spinner/index";
import { SearchBar } from "components/SearchBar";
import { ErrorMessage } from "components/ErrorMessage/index";
import { Header } from "components/Header/index";
import { getPlaces, searchPlaces } from "services/placesApi";
import { useNavigate } from "react-router-dom";
import { debounce } from "utils/debounce";

import "./styles.css";

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  // useEffect used to fetch Places through an API request,
  // and set places into a localstate places
  useEffect(() => {
    setIsLoading(true);
    getPlaces()
      .then((data) => {
        setPlaces(data);
        setAllPlaces(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!search) {
      setPlaces(allPlaces);
      return;
    }

    searchPlaces(search)
      .then((data) => {
        setPlaces(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  }, [search, allPlaces]);

  const handleNavigation = (place) => {
    navigate(`/places/${place.local_entry_id}`);
  };

  const handleSearch = debounce((value) => {
    setSearch(value);
  }, 500);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Container>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} className="searchBarGrid">
          <SearchBar handleSearch={handleSearch} />
        </Grid>
        {isLoading ? (
          <Spinner />
        ) : (
          places.map((place) => (
            <Grid
              item
              xs={6}
              key={place.local_entry_id}
              onClick={() => handleNavigation(place)}
            >
              <Card className="card">
                <CardContent>
                  <b>{place.displayed_what}</b>
                </CardContent>
                <CardContent>{place.displayed_where}</CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
