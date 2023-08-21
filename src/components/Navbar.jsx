// import React from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <span className="logo">Messenger</span>
//       <div className="user">
//         <img
//           src="https://images.pexels.com/photos/18002044/pexels-photo-18002044/free-photo-of-dan-ong.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//           alt=""
//         />
//         <span>John</span>
//         <button onClick={() => signOut(auth)}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Messsenger</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
