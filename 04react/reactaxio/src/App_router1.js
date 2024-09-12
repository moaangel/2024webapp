import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">홈</Link> | <NavLink to="/about">about</NavLink> |
        <Link to="/products">product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/products/:num" element={<ProductComp />} />
      </Routes>
      <footer>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
        praesentium!
      </footer>
    </div>
  );
}

export default App;
