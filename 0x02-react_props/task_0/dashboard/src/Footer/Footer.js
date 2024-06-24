import React from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from '../utils.js'

function Footer() {
  return (
    <>
      <p>Copyright {getFullYear()} - holberton School</p>
      {getFooterCopy()}
    </>
  );
}

export default Footer;