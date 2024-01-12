// import { IoPersonSharp } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";
// import { useMyntra } from "../store/items-list-store";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const { bagItemsList } = useMyntra();
//   //console.log( bagItemsList);
//   return (
//     <header>
//       <div className="logo_container">
//         <Link to="/">
//           <img
//             className="myntra_home"
//             src="images/myntra_logo.webp"
//             alt="Myntra Home"
//           />
//         </Link>
//       </div>
//       <nav className="nav_bar">
//         <a href="#">Men</a>
//         <a href="#">Women</a>
//         <a href="#">Kids</a>
//         <a href="#">Home & Living</a>
//         <a href="#">Beauty</a>
//         <a href="#">
//           Studio <sup>New</sup>
//         </a>
//       </nav>
//       <div className="search_bar">
//         <span className="material-symbols-outlined search_icon">
//           <IoSearch />
//         </span>
//         <input
//           className="search_input"
//           placeholder="Search for products, brands and more"
//         />
//       </div>
//       <div className="action_bar">
//         <div className="action_container">
//           <IoPersonSharp />
//           <span className="action_name">Profile</span>
//         </div>

//         <div className="action_container">
//           <FaHeart />
//           <span className="action_name">Wishlist</span>
//         </div>

//         <Link className="action_container" to="/bag">
//           <FaShoppingCart />
//           <span className="action_name">Bag</span>
//           <span className="bag-item-count">{bagItemsList.length}</span>
//         </Link>
//       </div>
//     </header>
//   );
// };
// export default Header;

import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useMyntra } from "../store/items-list-store";
import { Link } from "react-router-dom";

const Header = () => {
  const { bagItemsList } = useMyntra();

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
        <Link to="/">Kids</Link>
        <Link to="/">Home & Living</Link>
        <Link to="/">Beauty</Link>
        <Link to="/">
          Studio <sup>New</sup>
        </Link>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">
          <IoSearch />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonSharp />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaShoppingCart />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagItemsList.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
