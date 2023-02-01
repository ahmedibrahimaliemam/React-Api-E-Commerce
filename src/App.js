import React ,{Component} from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { useState , useEffect} from "react";
import Navbar from "./Component/Navbar";
import Slider from "./Component/Slider";
import Productlist from "./Component/Productlist";
import About from "./Component/About";
import ProductDetails from "./Component/productDetails";
import Product from "./Component/Product";
function App(){
  return(
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="" element={<><Navbar/><Slider/><Productlist/></>}/>
        <Route path="/" element={<><Slider/><Productlist/></>}/>
        <Route path="/About" element={<><About/></>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
      </Routes>
      

    </div>
    </BrowserRouter>
  )
}

export default App;
