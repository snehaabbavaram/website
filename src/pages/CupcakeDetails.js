import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/cupcakeDetails.css"; // Add styles if needed
 
const CupcakeDetails = () => {
  const cupcake = useSelector(state => state.cupcake.selectedCupcake);
  const navigate = useNavigate();
 
  if (!cupcake) {
    return <p>No cupcake selected!</p>;
  }
 
  return (
<div className="cupcake-details">
<h2>{cupcake.name}</h2>
<img src={cupcake.image} alt={cupcake.name} />
<p>{cupcake.description}</p>
<h3>Rs. {cupcake.price}</h3>
<button onClick={() => navigate("/")}>Back</button>
</div>
  );
};
 
export default CupcakeDetails;