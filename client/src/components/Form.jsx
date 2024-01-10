// Form.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../actions/Contacts";
import AuthForm from "./AuthForm";
import { redirect, useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5000";
const CONTACTS_ENDPOINT = "/contacts";

const getYesterdayDate = () => {
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const formattedDate = yesterdayDate.toLocaleDateString("en-US");
  return formattedDate;
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");
  return formattedDate;
};

const initialState = {
  name: "",
  yesterday_task: "",
  yesterday_date: getYesterdayDate(),
  today_task: "",
  today_date: getCurrentDate(),
  role_block: "",
};

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    const apiKey = "b6fcd10c863acc1086d5e187440c5cdadad77da6";

    setApiKey(apiKey);
  };

  const { name, yesterday_task, today_task, role_block } = formData;

  const updateMyTask = useSelector((state) =>
    currentId ? state.contacts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (updateMyTask) setFormData(updateMyTask);
  }, [updateMyTask]);

  const clear = () => {
    if (typeof setCurrentId === "function") {
      setFormData(initialState);
      setCurrentId(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      setError("Authentication required. Please log in.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    // Validate form fields
    if (!name || !yesterday_task || !today_task || !role_block) {
      setError("Please fill in all the required fields.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setLoading(true);

    const headers = {
      "Content-Type": "application/json",
      "API-Key": apiKey,
    };

    try {
      const response = await fetch(
        `${API_BASE_URL}${CONTACTS_ENDPOINT}${
          currentId ? `/${currentId}` : ""
        }`,
        {
          method: currentId ? "PATCH" : "POST",
          headers,
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.message) {
        setError(data.message);
      } else {
        setSuccessMessage(
          currentId
            ? "Task updated successfully!"
            : "Task created successfully!"
        );

        // Reset the form state here
        setFormData(initialState);

        // Refresh the page
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }

    setLoading(false);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className="container mx-auto p-8">
          <h1 className="text-center font-bold text-2xl mb-8">Daily Update</h1>

          {error && (
            <p className="border border-red-500 bg-red-500 text-white p-2 rounded-md text-center mb-8">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-xl">
              <label className="py-2 px-2" htmlFor="person_name">
                Person:
              </label>
              <input
                type="text"
                id="person_name"
                placeholder="Full name..."
                className="outline-none w-full border-[1px] p-2"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col text-xl">
              <div className="flex items-center justify-between px-2">
                <label className="py-2 px-2" htmlFor="today_task">
                  Today Date:
                </label>
                <span>{getCurrentDate()}</span>
              </div>
              <select
                id="today_task"
                className="outline-none w-full border-[1px] p-2"
                name="today_task"
                value={today_task}
                onChange={handleChange}
              >
                <option value="">Choose a task...</option>
                <option value="meeting">Meeting</option>
                <option value="writing">Writing</option>
                <option value="development">Development</option>
                <option value="testing">Testing</option>
                <option value="bug">Bug Fixing</option>
                <option value="deployment">Deployment</option>
                <option value="analysis">Data Analysis</option>
                <option value="support">Customer Support</option>
                <option value="research">Research</option>
                <option value="design">Design</option>
                <option value="maintenance">Maintenance</option>
                <option value="presentation">Presentation</option>
                <option value="email">Emails</option>
                <option value="training">Training</option>
                <option value="project">Project Management</option>
              </select>
            </div>

            <div className="flex flex-col text-xl">
              <div className="flex items-center justify-between px-2">
                <label className="py-2 px-2" htmlFor="yesterday">
                  Yesterday Date:
                </label>
                <span>{getYesterdayDate()}</span>
              </div>
              <select
                id="yesterday"
                className="outline-none w-full border-[1px] p-2"
                name="yesterday_task"
                value={yesterday_task}
                onChange={handleChange}
              >
                <option value="">Choose a task...</option>
                <option value="meeting">Meeting </option>
                <option value="writing">Writing </option>
                <option value="development">Development </option>
                <option value="testing">Testing </option>
                <option value="bug">Bug Fixing </option>
                <option value="deployment">Deployment </option>
                <option value="analysis">Data Analysis</option>
                <option value="support">Customer Support </option>
                <option value="research">Research </option>
                <option value="design">Design </option>
                <option value="maintenance">Maintenance </option>
                <option value="presentation">Presentation </option>
                <option value="email">Emails </option>
                <option value="training">Training </option>
                <option value="project">Project Management</option>
              </select>
            </div>

            <div className="flex flex-col text-xl">
              <label className="py-2 px-2" htmlFor="role_block">
                Roald Block:
              </label>
              <select
                id="role_block"
                className="outline-none w-full border-[1px] p-2"
                name="role_block"
                onChange={handleChange}
                value={role_block}
              >
                <option value="">Select a role</option>
                <option value="wordpress">WordPress</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="design">Design</option>
                <option value="testing">Testing</option>
                <option value="project_management">Project Management</option>
                <option value="database_admin">Database Administration</option>
                <option value="dev_ops">DevOps</option>
                <option value="security">Security</option>
                <option value="mobile_app">Mobile App Development</option>
                <option value="data_analysis">Data Analysis</option>
                <option value="cloud_computing">Cloud Computing</option>
                <option value="networking">Networking</option>
                <option value="ui_ux">UI/UX Design</option>
                <option value="technical_writing">Technical Writing</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 text-white font-bold py-2 mt-4"
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : currentId
                ? "Update Task"
                : "Create Task"}
            </button>

            {successMessage && (
              <p className="border border-green-500 bg-green-500 text-white p-2 rounded-md text-center mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      ) : (
        <AuthForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Form;
