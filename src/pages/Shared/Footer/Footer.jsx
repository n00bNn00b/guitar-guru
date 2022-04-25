import React from "react";
import "./Footer.css";

const Footer = () => {
  const startingYear = 2021;
  const presentYear = new Date().getFullYear();
  return (
    <footer className="mt-1">
      <div className="text-center">
        &copy; {startingYear} - {presentYear} | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
