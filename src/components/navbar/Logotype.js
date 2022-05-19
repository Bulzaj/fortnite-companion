import { Box, Typography } from "@mui/material";
import logo from "../../assets/fortnite-logo.png";
import classes from "./logotype.module.css";

const Logotype = function () {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} className={classes.logo} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontFamily: "monospace",
          letterSpacing: ".1rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Companion
      </Typography>
    </Box>
  );
};

export default Logotype;
