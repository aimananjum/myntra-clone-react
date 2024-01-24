import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useMyntra } from "../store/items-list-store";
import { Link } from "react-router-dom";

const Header = ({ progress, setProgress }) => {
  const { bagItemsList, setSearch } = useMyntra();

  return (
    <header>
      <div className="logo_container" onClick={() => setProgress(100)}>
        <Link to="/myntra-clone-react/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar" onClick={() => setProgress(100)}>
        <Link to="/myntra-clone-react/mens">Men</Link>
        <Link to="/myntra-clone-react/womens">Women</Link>
        <Link to="/myntra-clone-react/">Kids</Link>
        <Link to="/myntra-clone-react/">Home & Living</Link>
        <Link to="/myntra-clone-react/">Beauty</Link>
        <Link to="/myntra-clone-react/">
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
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="action_bar">
        <div className="action_container dropdown">
          <IoPersonSharp />
          <span className="action_name">Profile</span>
          <div className="dropdown-content">
            <p>Hello Aiman</p>
            <p>6574834848</p>
            <hr />
            <p>Orders</p>
            <p>Wishlist</p>
            <p>Gift Cards</p>
            <p>Contact Us</p>
            <p>Myntra InsiderNew</p>
            <hr />
            <p>Myntra Credit</p>
            <p>Coupons</p>
            <p>Saved Cards</p>
            <p>Saved VPA</p>
            <p>Saved Addresses</p>
            <hr />
            <p>Edit Profile</p>
            <p>Logout</p>
          </div>
        </div>

        <Link
          className="action_container"
          to="/myntra-clone-react/wishlist"
          onClick={() => setProgress(100)}
        >
          <FaHeart />
          <span className="action_name">Wishlist</span>
        </Link>

        <Link
          className="action_container"
          to="/myntra-clone-react/bag"
          onClick={() => setProgress(100)}
        >
          <FaShoppingCart />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagItemsList.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
