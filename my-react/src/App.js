import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CardCreate from "./component/CardCreate";
import CardDetail from "./component/CardDetail";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import Portfolio from "./component/pages/Portfolio";
import StadionUpdate from "./component/StadionUpdate";



function App() {
  return  <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/> 
              <Route path="/about" element={<About/>}/> 
              <Route path="/portfolio" element={<Portfolio/>}/> 
              <Route path="/contact" element={<Contact/>}/> 
              <Route path="/name/:id" element={<CardDetail/>}/> 
              <Route path="/name/update/:id" element={<StadionUpdate/>}/> 
              <Route path="/name/create" element={<CardCreate/>}/> 
            </Routes>
          </BrowserRouter>
  
}

export default App;