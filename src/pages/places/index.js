import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { SearchBar } from "components/searchbar";

export default function Places() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: "15px" }}>
          <SearchBar />
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>TEST</CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>TEST</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
