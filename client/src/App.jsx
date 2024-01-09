// client/src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Form from "./components/Form";
import AdminPage from "./components/AdminPage";
import AuthForm from "./components/AuthForm";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { logout, getCurrentUser } from "./auth.js";

const App = () => {
  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    // Your login logic here
    console.log("User logged in");
  };

  return (
    <>
      <Navbar
        isAuthenticated={!!getCurrentUser()}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/user" element={<Form />} />
        <Route
          path="/admin_page"
          element={<AdminPage />}
          allowedRole="admin_page"
        />
        {/* Pass onLogin prop to AuthForm */}
        <Route path="/auth_form" element={<AuthForm onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
