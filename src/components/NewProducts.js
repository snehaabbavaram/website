// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const NewProducts = ({ products }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <div>
//       <h1>New Products</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-item" onClick={() => handleProductClick(product.id)}>
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewProducts;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AddToCart from './AddToCart';
// import AddToWishList from './AddToWishList';
// import '../css/NewProducts.css'; // Ensure this import is correct

// const NewProducts = ({ products = [] }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <div className="new-products">
//       <h1>New Products</h1>
//       <div className="product-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className="product-item">
//               <img src={product.image} alt={product.name} onClick={() => handleProductClick(product.id)} />
//               <h3>{product.name}</h3>
//               <p>{product.price}</p>
//               <div className="product-buttons">
//                 <AddToCart product={product} />
//                 <AddToWishList product={product} />
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No new products available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewProducts;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCart from './AddToCart';
import AddToWishList from './AddToWishList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NewProducts.css';

const NewProducts = ({ products = [] }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container new-products">
      <h1 className="my-4">New Products</h1>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} onClick={() => handleProductClick(product.id)} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => handleProductClick(product.id)}>View</button>
                    <AddToCart product={product} />
                    <AddToWishList product={product} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No new products available.</p>
        )}
      </div>
    </div>
  );
};

export default NewProducts;