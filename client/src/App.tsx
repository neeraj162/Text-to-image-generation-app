import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Generate from "./components/Generate";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
