import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "../styles/AuthStyles.css";
import { useAuth } from "../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));

        navigate(location.state || ROUTES.HOMEPAGE);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - ShopSwift">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
          </div>

          <div className="mb-3">
            <button
              type="butten"
              className="btn btn-primary"
              onClick={() => {
                navigate(ROUTES.FORGOTPASSWORD);
              }}
            >
              Forgot Password
            </button>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
