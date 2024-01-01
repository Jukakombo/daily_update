import { useEffect, useState } from "react";
import Index from "./pages/Index";
import { useDispatch } from "react-redux";
import { getContacts } from "./actions/contacts";
import { getNews } from "./actions/news";
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      <Index />
    </div>
  );
};

export default App;
