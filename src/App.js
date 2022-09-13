import React from "react";

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from "./GlobalStyle";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";
import { productData, productDataTwo } from "./Components/Products/Data";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Hero />
      <Products heading={'Choose your favorite'} Data={productData}/>
      <Feature />
      <productDataTwo heading={'Sweet Treats for you!'} Data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
