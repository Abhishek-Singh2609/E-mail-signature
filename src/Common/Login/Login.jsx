import React from "react";
import "./Login.css";
import Loginimg from "../../assets/Login/login.jpg";
import Microsoftimg from "../../assets/Login/Microsoft_logo.svg.png";
import Fbimg from "../../assets/Login/fblogo.webp";

function Login() {
  return (
    <>
      <div class="container-fluid">
        <div class="row login-container">
          {/* <!-- Left Side --> */}
          <div class="col-md-6 d-flex align-items-center">
            <div class="login-left">
              <h1 class="login-title">Sign in to Agile</h1>

              {/* <!-- Social Login Buttons --> */}
              <a href="#" class="social-btn btn-google">
                <img src={Microsoftimg} alt="" class="me-2" width="20" />
                Continue with Microsoft
              </a>
              <a href="#" class="social-btn btn-facebook">
                <img src={Fbimg} alt="" class="me-2" width="20" />
                Continue with Facebook
              </a>
              <a href="#" class="social-btn btn-sso">
                Continue with SSO
              </a>

              <div class="divider">OR</div>

              {/* <!-- Login Form --> */}
              <form>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required="true"
                />
                {/* <div class="form-label">Email Is Required</div> */}

                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required="true"
                />
                {/* <div class="form-label">Password Is Required</div> */}

                <button type="submit" class="btn btn-signin">
                  Sign in
                </button>
              </form>

              <div class="links">
                <a href="#"className="text-color">Forgot password?</a>
                <a href="#"className="text-color">Create an account</a>
              </div>

              <div class="terms">
                By signing up you agree with our &nbsp;
                <a href="#" className="text-color">terms of service</a> & &nbsp;<a href="#" className="text-color">privacy policy</a>
              </div>
            </div>
          </div>

          {/* <!-- Right Side --> */}
          <div class="col-md-6 login-right">
            <img src={Loginimg} alt="" class="login-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
