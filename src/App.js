import { Box, CssBaseline, Toolbar } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <BrowserRouter>
        <Box component="main" sx={{ p: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
