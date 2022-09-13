import React from "react";

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from "./GlobalStyle";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";
import { ProductData, ProductDataTwo } from "./Components/Products/Data";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Hero />
      <Products heading={'Choose your favorite'} data={ProductData}/>
      <Feature />
      <Products heading={'sweets!'} data={ProductDataTwo} />
  <Footer />
    </Router>
  );
}

export default App;
