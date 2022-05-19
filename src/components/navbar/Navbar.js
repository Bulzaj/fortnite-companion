import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Logotype from "./Logotype";

const Navbar = function () {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Logotype />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
