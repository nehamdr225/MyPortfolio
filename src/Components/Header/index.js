import React from "react";
import "./style.css";
import HamMenu from "../hamMenu";
import Hero from "../Hero";
import NMLogo from "../nmlogo";

/**
 * @author
 * @function Header
 **/

const Header = ({ name, email }) => {
  console.log(name, email);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
        <div className= "name">
          <a href="" className="logo">
          <NMLogo color="white" />
          </a>
        </div>
        <div className="navbar">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        </div>
      </div>
      {/* <Hero/> 
       */}
    </header>
  );
};

// const objExample = {
//   name: "Neha M.",
//   "email": "abc@gmail.com",
//   1: 1,
//   array: [{
//     one: Header({name:"Neha",})
//   }]
// }
// console.log(objExample)

export default Header;