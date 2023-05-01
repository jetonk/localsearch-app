import { Grid, Box, CircularProgress } from "@mui/material";
import "./styles.css";

export function Spinner() {
  return (
    <Grid item xs={12}>
      <Box className="container">
        <CircularProgress />
      </Box>
    </Grid>
  );
}
