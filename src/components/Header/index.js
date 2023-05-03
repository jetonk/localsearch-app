import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo.png";
import "./styles.css";

export function Header() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <Grid item xs={12}>
      <Box className="logoContainer" onClick={handleNavigation}>
        <img src={logo} className="logo" />
        <Typography variant="h5"> Localsearch</Typography>
      </Box>
    </Grid>
  );
}
