// import React from 'react';
 
// const Register = () => {
//   return (
//     <div className="register-container">
//       <h2>Create Account</h2>
//       <form>
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" name="name" required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" required />
//         </div>
//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input type="tel" name="phone" required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" name="password" required />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input type="password" name="confirmPassword" required />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
 
// export default Register;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/register.css'; 
 
const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row justify-content-center" style={{width:"100%",marginLeft:"20%"}}>
        <div className="col-md-6">
          <div className="register-container">
          <h2 className="text-center" style={{ backgroundColor: 'rgb(231,84,128)' }}>Create Account</h2>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control pink-border" name="name" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control pink-border" name="email" required />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input type="tel" className="form-control pink-border" name="phone" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control pink-border" name="password" required />
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <input type="password" className="form-control pink-border" name="confirmPassword" required />
              </div>
              <button type="submit" className="btn btn-pink btn-block mt-3">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Register;