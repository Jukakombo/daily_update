/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useLocation } from "react-router-dom";

const NavAdmin = ({ user, setUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
    console.log("logout");
    alert("logout");
  };
  useEffect(() => {
    const token = user?.token;

    // Check if the token exists before setting the user
    if (token) {
      setUser(JSON.parse(localStorage.getItem("profile")));
    } else {
      setUser(null);
    }
  }, [user?.token, setUser]);

  return (
    <div>
      <div className="flex items-center justify-between text-white px-4 py-4 rounded bg-blue-400">
        <div className="">
          <img src="/images.png" className="w-[60px] rounded-full" alt="logo" />
        </div>
        <div className="">
          Welcome &nbsp; <strong>{user?.result?.name}</strong>
        </div>

        <button className="bg-blue-500 rounded-full p-2" onClick={logout}>
          <IoIosLogOut className="text-white font-bold text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default NavAdmin;
