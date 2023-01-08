import React from "react";
import "./Navbar.css";
import { images } from "../../constants";
import { Routes, Route } from "react-router";

const Navbar = () => {
  return (
    <div className="main">
      <div className="logo">
        <img src={images.logo} alt="Logo Ramapo" />
      </div>
      <div className="text">
        <div className="text-top">RAMAPO COLLEGE</div>
        <div className="text-bottom">of New Jersey</div>
      </div>
      <div className="navbar__buttons">
        <button>ABOUT US</button>
        <button>LOGIN</button>
        <button>REGISTER</button>
        <button>ORDER</button>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default Navbar;
