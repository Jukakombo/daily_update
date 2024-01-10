<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Adjust the path based on your project structure
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, isAdmin } from "../auth";
>>>>>>> 00d999d041d6f9c368bb494089c87bdaa3b466e9
import "../AuthForm.css";
import { useDispatch } from "react-redux";
import { signin } from "../actions/user";

const initialState = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
  };

  return (
    <div className="grid md:grid-cols-3  ">
      <form className="" onSubmit={handleSubmit}>
        <div className="login-form">
          <h1>Login</h1>
          <input
            type="email"
            className=" w-full my-4 p-2 outline-none"
            name="email"
            value={formData.email}
            placeholder="Enter your email address"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
          <input
            type="password"
            className=" w-full my-4 p-2 outline-none"
            name="password"
            placeholder="Enter your Password ...   "
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            required
          />
          <button
            type="submit"
            className="bg-blue-300 transform text-white font-semibold rounded-md w-full p-2"
          >
            <span>Login</span>
          </button>
          <span className="py-4">
            Don't have an account? &nbsp;
            <Link to="/register" className="text-blue-900">
              Create Account
            </Link>
          </span>
        </div>
      </form>

<<<<<<< HEAD
=======
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#87CEFA",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            border: "none",
          }}
        >
          <span>Login</span>
        </button>
      </div>
>>>>>>> 00d999d041d6f9c368bb494089c87bdaa3b466e9
      <div className="login-image"></div>
    </div>
  );
};

export default AuthForm;
