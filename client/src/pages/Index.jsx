import Navbar from "../common/Navbar";
import Form from "../components/Form";
import Footer from "../common/Footer";
import TableData from "../components/Table";
import { useSelector } from "react-redux";
import { useState } from "react";
const Index = () => {
  const tasks = useSelector((state) => state.contacts);
  const [currentId, setCurrentId] = useState(0);
  return (
    <>
      <Navbar />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <TableData
        tasks={tasks}
        setCurrentId={setCurrentId}
        currentId={currentId}
      />
      <Footer />
    </>
  );
};

export default Index;
