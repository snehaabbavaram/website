// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Navigation from './components/Navigation';
// import Aside from './components/Aside';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import MochaCupcake from './components/MochaCupcake';
// import Login from './components/Login';
// import Register from './components/Register'; // Import Register component
 
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Navigation />
//         <div className="row mainRow">
//           <Aside />
//           <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="/mochaCupcake" element={<MochaCupcake />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} /> {/* Add Register route */}
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
 
// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Header";
// import Navigation from "./components/Navigation";
// import Aside from "./components/Aside";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import MochaCupcake from "./components/MochaCupcake";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import CupcakeMaker from "./components/cupcakeMaker"; // Import CupcakeMaker component
// import CupcakeDetails from "./pages/CupcakeDetails";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Navigation />
//         <div className="row mainRow">
//           <Aside />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Main />
//                   <CupcakeMaker /> {/* Keeps CupcakeMaker below Main */}
//                 </>
//               }
//             />
//             <Route path="/mochaCupcake" element={<MochaCupcake />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/cupcake-details" element={<CupcakeDetails />} /> {/* Added CupcakeDetails route */}
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// };
 
// export default App;

//after doing the newproducts
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MochaCupcake from "./components/MochaCupcake";
import Login from "./components/Login";
import Register from "./components/Register";
import CupcakeMaker from "./components/cupcakeMaker";
import CupcakeDetails from "./pages/CupcakeDetails";
import MyAccount from "./components/MyAccount";
import NewProducts from "./components/NewProducts";
import Specials from "./components/Specials";
import SiteMap from "./components/SiteMap";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts"; // Add this import


const App = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: 'image2.jpg' },
    // Add more products as needed
  ];

  const specials = [
    { id: 1, name: 'Special 1', price: '$15', image: 'special1.jpg' },
    { id: 2, name: 'Special 2', price: '$25', image: 'special2.jpg' },
    // Add more specials as needed
  ];

  const posts = [
    { id: 1, title: 'Blog Post 1', content: 'Content of blog post 1' },
    { id: 2, title: 'Blog Post 2', content: 'Content of blog post 2' },
    // Add more posts as needed
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <Aside className="col-md-3" />
            <div className="col-md-9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Main />
                      <CupcakeMaker />
                    </>
                  }
                />
                <Route path="/mochaCupcake" element={<MochaCupcake />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cupcake-details" element={<CupcakeDetails />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/new-products" element={<NewProducts products={products} />} />
                <Route path="/specials" element={<Specials specials={specials} />} />
                <Route path="/site-map" element={<SiteMap />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blog" element={<Blog posts={posts} />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;