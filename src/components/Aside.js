import React from 'react';
import '../css/navigation.css';
 
const Aside = () => {
  return (
    <aside className="aside col-3 col-t-4 col-m-12">
      <div className="aside1">
        <h3>CATEGORIES</h3>
        <ul>
          <li><a href="#">Gifts/Combos</a></li>
          <li><a href="#">Premium Cupcakes</a></li>
          <li><a href="#">Birthday Cupcakes</a></li>
          <li><a href="#">Custom Cupcakes</a></li>
          <li><a href="#">Cartoon Cupcakes</a></li>
          <li><a href="#">Superhero Cupcakes</a></li>
          <li><a href="#">Cheesecake Cupcakes</a></li>
          <li><a href="#">Holiday Cupcakes</a></li>
          <li><a href="#">Eggless Cupcakes</a></li>
          <li><a href="#">Midnight Delivery</a></li>
        </ul>
      </div>
      <div className="aside2">
        <h3>CONTACT US</h3>
        <p>Our support is available 24/7.<br/>
        +91-9988776655 / +91-9988776654</p>
      </div>
      <div className="aside3">
        <h3>FIND CUPCAKES</h3>
        <input type="text" placeholder="Search" id="searchBox2" />
      </div>
    </aside>
  );
};
 
export default Aside;
 