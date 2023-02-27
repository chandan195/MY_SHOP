import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React ,{Suspense}from "react";
import "./App.css"
import Header from "./components/Header";
import About from "./components/Pages/About";
import Card from "./components/Pages/Card";
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import LogIn from "./components/Pages/LogIn";
import ProductPage from "./components/Pages/ProductPage";
import SingleProduct from "./components/Pages/SingleProduct";
import LoadingPage from "./components/Pages/LoadingPage";

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={
          <div>
            <LoadingPage/>
          </div>
        }>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/ProductPage/:id" element={<ProductPage />} />
        <Route exact path="/Cart/:id" element={<Card />} />
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route
          exact
          path="/SingleProduct/:productId"
          element={<SingleProduct />}
        />
        <Route exact path="/About" element={<About />} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
