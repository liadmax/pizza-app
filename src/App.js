import React from "react";

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from "./GlobalStyle";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";
import { productData } from "./Components/Products/Data";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Hero />
      <Products heading={'Choose your favorite'} Data={productData}/>
    </Router>
  );
}

export default App;
