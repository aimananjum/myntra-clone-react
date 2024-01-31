import Header from "./Header";

const LoginSignup = () => {
  return (
    <>
      <Header />
      <div className="login-signup-container">
        <div className="form-container">
          <div className="heading-img">
            <img className="discount-img" src="images/discount_img.webp"></img>
          </div>
          <div className="login-signup-form">
            <label className="form-heading">
              <b>Login</b> or <b>Signup</b>
            </label>
            <br></br>
            <div className="number-input">
              <input
                type="tel"
                className="phone"
                placeholder="+91  |  Mobile Number"
                required
              />
            </div>
            <div className="terms-and-privacy">
              By continuing, I agree to the
              <a className="links"> Terms of Use </a> &{" "}
              <a className="links"> Privacy Policy </a>
            </div>
            <button className="login-btn">CONTINUE</button>
            <div className="help">
              Have trouble logging in? <a className="links">Get help</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginSignup;
