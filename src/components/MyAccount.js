// import React from 'react';

// const MyAccount = () => {
//   return (
//     <div>
//       <h1>My Account</h1>
//       {/* Add account details and functionalities here */}
//     </div>
//   );
// };

// export default MyAccount;
import React, { useState, useEffect } from 'react';

const MyAccount = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch user data from backend
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="my-account">
      <h1>My Account</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more account details and functionalities here */}
    </div>
  );
};

export default MyAccount;
