import { Link, useNavigate } from "react-router-dom";
import { useMyntra } from "../store/items-list-store";

const ProfileDropDown = () => {
  const { setSession, empty } = useMyntra();
  const navigate = useNavigate();
  return (
    <div className="dropdown-content">
      <div className="user-details">
        <p>
          Hello Aiman
          <br />
          6574834848
        </p>
        <Link
          to="/myntra-clone-react/login-signup"
          className="button-for-login"
        >
          Login / Signup
        </Link>
      </div>
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
      <p
        className="logout"
        onClick={() => {
          setSession(false);
          empty();
          navigate("/myntra-clone-react/login-signup");
        }}
      >
        Logout
      </p>
    </div>
  );
};
export default ProfileDropDown;
