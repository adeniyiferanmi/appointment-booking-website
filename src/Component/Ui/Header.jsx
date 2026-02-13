import React, { useState } from "react";
import headerImg from "../assets/output-onlinepngtools.png";
import "../Styles/header.css";

const Header = () => {
  const[isOpen,setIsOpen] = useState(false)

  const open = () =>{
    setIsOpen(!isOpen)
  }
  const close = () =>{
    setIsOpen(false)
  }
  return (
    <div className=" header-container">
      <div className="header-contain">
        <div>
          <a href="/">
            <img src={headerImg} alt="" className="w-40" />
          </a>
        </div>

        <div className="header-ul team">
          {/* <div className=""> */}
          <ul className="ul">
            <a href="/#service">Services</a>
            <a href="/#team">Team</a>
            <a href="/#gallery">Gallery</a>
            <a href="/#price">Pricing</a>
          </ul>
          <div>
            <a href="/appointment">
              <button className="ul-btn">Book Now</button>
            </a>
          </div>
          {/* </div>  */}
        </div>

        <div className="header-icon">
          <button onClick={open} className="icon-btn">
            {isOpen ? '✕' : '☰'}
          </button>
          {isOpen &&(
          <div className=" second">
            <ul className="ul">
              <a href="/#service">Services</a>
              <a href="/#team">Team</a>
              <a href="/#gallery">Gallery</a>
              <a href="/#price">Pricing</a>
            </ul>
            <div>
              <a href="/appointment">
                <button >Book Now</button>
              </a>
            </div>
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;
