import React, { useState, useEffect } from "react";
import axios from "axios";
import TableData from "./TableData";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorBoundary from "/ErrorBoundary";
import AuthForm from "./AuthForm";

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState(
    "b6fcd10c863acc1086d5e187440c5cdadad77da6"
  );

  const navigate = useNavigate();

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/contacts", {
        headers: {
          "API-Key": apiKey,
        },
      });

      setContacts(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setError("Error fetching contacts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [apiKey]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`, {
        headers: {
          "API-Key": apiKey,
        },
      });
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact._id !== id)
      );
    } catch (error) {
      console.error("Error deleting contact:", error);
      setError("Error deleting contact. Please try again.");
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/admin_page");
  };

  return (
    <ErrorBoundary>
      {!isAuthenticated ? (
        <div>
          <h1 className="ad_pg">Admin Page</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {error ? (
                <p>{error}</p>
              ) : (
                <TableData tasks={contacts} handleDelete={handleDelete} />
              )}
            </div>
          )}
        </div>
      ) : (
        <AuthForm onLogin={handleLogin} />
      )}
    </ErrorBoundary>
  );
};

export default AdminPage;
