import { useState} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import bgLogin from "../../img/bg.png"

const Login = () => {
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    const navigate = useNavigate()

    const handlesubmit = (e) => {
      e.preventDefault()
      console.log(email , password);
      navigate("/")
    }

  return (
    <div className="Container">
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
        <input
          className="btn btn-success w-100"
          data-bs-toggle="button"
          type="submit"
          defaultValue="SIGN IN"
        />
      </form>
    </div>
    <div>
      <img src={bgLogin} alt="" height={600} width={600} />
    </div>
    </div>
    
  );
};

export default Login;
