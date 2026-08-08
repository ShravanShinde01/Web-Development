import React from 'react'
import "../components/Login.css"

const Login = () => {
  return (
      <div className="login-container">

      <div className="login-box">

        <h1>Welcome Back 👋</h1>

        <p>Login to your account</p>

        <form>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <div className="signup">
          Don't have an account?
          <a href="#"> Create Account</a>
        </div>

      </div>

    </div>

  )
}

export default Login
