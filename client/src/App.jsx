import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./common/Footer";
import Form from "./components/Form";
import AuthForm from "./components/AuthForm";
import TableData from "./components/TableData";
import { getContacts } from "./actions/Contacts";
import { useDispatch } from "react-redux";
import Register from "./components/Register";

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const ProtectedRoute = ({ element }) => {
    if (!user) {
      return <Navigate to="/user" />;
    }

    return element;
  };

  return (
    <>
      <Routes>
        <Route path="/daily-record" element={<Form />} />
        <Route path="/" element={<AuthForm />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              element={<TableData user={user} setUser={setUser} />}
            />
          }
        />
        <Route path="/user" element={<AuthForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
