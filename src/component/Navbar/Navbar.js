import React from "react";
import "./Navbar.css";
import { images } from "../../constants";
import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, Login, Order, Register } from "../../pages";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div
        className="logo-text"
        onClick={() => {
          navigate("/");
        }}>
        <div className="logo">
          <img src={images.logo} alt="Logo Ramapo" />
        </div>
        <div className="text">
          <div className="text-top">RAMAPO COLLEGE</div>
          <div className="text-bottom">of New Jersey</div>
        </div>
      </div>
      <div className="navbar__buttons">
        <button
          onClick={() => {
            navigate("/about-us");
          }}>
          ABOUT US
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}>
          LOGIN
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}>
          REGISTER
        </button>
        <button
          onClick={() => {
            navigate("/order");
          }}>
          ORDER
        </button>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
};
export default Navbar;
