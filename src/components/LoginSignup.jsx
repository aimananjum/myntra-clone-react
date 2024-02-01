import { useState } from "react";
import { Link } from "react-router-dom";
import { useMyntra } from "../store/items-list-store";
import OTPInput from "./OTPInput";

const LoginSignup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const { session, setSession } = useMyntra();

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePhoneSumit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOTP(true);
  };
  const onOtpSubmit = (otp) => {
    console.log("Login Successfull", otp);
    if (otp.length === 4) {
      setSession(true);
    } else {
      setSession(false);
    }
  };

  return (
    <>
      {!showOTP ? (
        <div className="login-signup-container">
          <form
            className="form-container"
            onSubmit={(e) => handlePhoneSumit(e)}
          >
            <div className="heading-img">
              <img
                className="discount-img"
                src="images/discount_img.webp"
              ></img>
            </div>
            <div className="login-signup-form">
              <label className="form-heading">
                <b>Login</b> or <b>Signup</b>
              </label>
              <br></br>
              <div className="number-input">
                <input
                  type="text"
                  className="phone"
                  placeholder="+91  |  Mobile Number"
                  required
                  onChange={handlePhoneNumber}
                />
              </div>
              <div className="terms-and-privacy">
                By continuing, I agree to the
                <a className="links"> Terms of Use </a> &{" "}
                <a className="links"> Privacy Policy </a>
              </div>
              <button className="login-btn" type="submit">
                CONTINUE
              </button>
              <div className="help">
                Have trouble logging in? <a className="links">Get help</a>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="login-signup-container">
          <form className="form-container">
            <div className="verification-header">
              <img className="verification" src="images/verification.jpg"></img>
            </div>
            <div className="login-signup-form">
              <label className="form-heading">
                <b>Verify with OTP</b>
              </label>
              <br />
              <div className="terms-and-privacy">
                <label>Sent to </label>
                {" " + phoneNumber}
              </div>
              <OTPInput length={4} onOtpSubmit={onOtpSubmit} />

              <Link to="/myntra-clone-react/">
                {session ? (
                  <button className="login-btn">CONTINUE</button>
                ) : (
                  <button className="login-btn" disabled={true}>
                    CONTINUE
                  </button>
                )}
              </Link>
              <div className="help">
                Have trouble logging in? <a className="links">Get help</a>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default LoginSignup;
