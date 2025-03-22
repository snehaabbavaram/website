import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <div className="headerLogo">
        <img src="images/headerImage.jpg" alt="The Cupcake Maker Logo" />
        The Cupcake Maker
      </div>
      <a href="#">Contact</a>
      <a href="#">Cart(0)</a>
      <a href="login">Login</a>
    </header>
  );
};

export default Header;