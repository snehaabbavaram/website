// import React from 'react';
// import '../css/cupcakeHome.css';
 
 
// const Cupcake = ({ image, name, description, price, viewLink }) => {
//   return (
//     <div className="cupcakeDiv col-3 col-t-6 col-m-6">
//       <img src={image} alt={name} />
//       <div className="cupcakeText">
//         <h3>{name}</h3>
//         <p>{description}</p>
//       </div>
//       <h4>Rs. {price}</h4>
//       <a className="link" href={viewLink}>View</a>
//       <a className="link" href="#">Add to cart</a>
//     </div>
//   );
// };
 
// export default Cupcake;
import React from 'react';
import '../css/cupcakeHome.css';
 
const Cupcake = ({ image, name, description, price, onView }) => {
  return (
<div className="cupcakeDiv col-3 col-t-6 col-m-6">
<img src={image} alt={name} />
<div className="cupcakeText">
<h3>{name}</h3>
<p>{description}</p>
</div>
<h4>Rs. {price}</h4>
<button className="link" onClick={onView}>View</button> {/* ✅ Updated */}
<button className="link">Add to cart</button>
</div>
  );
};
 
export default Cupcake;