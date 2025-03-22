// import React from 'react';
// import { Link } from 'react-router-dom';
 
// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" name="password" required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <Link to="/register">Create Account</Link></p>
//     </div>
//   );
// };
 
// export default Login;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../css/login.css"
 
// const Login = () => {
//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="row justify-content-center" style={{width:"100%",marginLeft:"20%"}}>
//         <div className="col-md-6">
//           <div className="authenticateBox">
//             <h4 className="text-center">Login</h4>
//             <form>
//               <div className="form-group">
//                 <label>Email:</label>
//                 <input type="email" className="form-control" name="email" required />
//               </div>
//               <div className="form-group">
//                 <label>Password:</label>
//                 <input type="password" className="form-control" name="password" required />
//               </div>
//               <button type="submit" className="btn btn-pink btn-block mt-3">Login</button>
//             </form>
//             <p>Don't have an account? <Link to="/register">Create Account</Link></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Login;


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/login.css";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className="col-md-6">
          <div className="authenticateBox">
            <h4 className="text-center">Login</h4>
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" name="email" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" name="password" required />
              </div>
              <button type="submit" className="btn btn-pink btn-block mt-3">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Create Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;