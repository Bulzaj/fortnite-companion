import { Box, Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <BrowserRouter>
        <Container component="main" maxWidth="lg">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
