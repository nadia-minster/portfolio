import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>{`${year} Nadia Minster`}</span>
    </footer>
  );
};

export default Footer;
