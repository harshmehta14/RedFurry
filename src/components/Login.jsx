import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className="Login">
  <h1 className="text-center">Welcome</h1>
  <form className="needs-validation">
    <div className="form-group was-validated">
      <label className="form-label" htmlFor="email">
        Email address
      </label>
      <input className="form-control" type="email" id="email" required="" />
      <div className="invalid-feedback">Please enter your email</div>
    </div>
    <div className="form-group was-validated">
      <label className="form-label" htmlFor="password">
        Password
      </label>
      <input
        className="form-control"
        type="password"
        id="password"
        required=""
      />
      <div className="invalid-feedback">Please enter your password</div>
    </div>
    <div className="form-group form-check">
      <input className="form-check-input" type="checkbox" id="check" />
      <label className="form-check-label" htmlFor="check">
        Remember me
      </label>
    </div>
    <input
      className="btn btn-success w-100"
      data-bs-toggle="button"
      type="submit"
      defaultValue="SIGN IN"
    />
  </form>
</div>
  )
}

export default Login