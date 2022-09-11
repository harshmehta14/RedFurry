import { useState} from "react";
import "./Login.css";

const Login = () => {
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    const handlesubmit = (e) => {
      e.preventDefault()
      console.log(email , password);
    }

  return (
    <div className="Login">
      <h1 className="text-center">Welcome</h1>
      <form  onSubmit={handlesubmit} className="needs-validation">
        <div className="form-group was-validated">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input className="form-control" type="email" id="email" value={email} onChange={(e) =>  setEmail(e.target.value)}/>
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
            value={password}
            onChange={(e) =>  setPassword(e.target.value)}
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
  );
};

export default Login;
