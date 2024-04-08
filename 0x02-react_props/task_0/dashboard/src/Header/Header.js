/** @format */

import React from "react";
import './Header.css'
import logo from "../holberton.jpg";

function Header() {
  return (
    <div className='App-header'>
      <div>
        <img src={logo} alt='logo'></img>
      </div>
      <div>
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}

export default Header;