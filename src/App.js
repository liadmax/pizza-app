import React from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from "./GlobalStyle";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <Hero />
    </Router>
  );
}

export default App;
