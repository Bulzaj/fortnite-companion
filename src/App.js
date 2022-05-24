import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <BrowserRouter>
        <Container component="main" maxWidth="md">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
