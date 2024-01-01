/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact, updateContact } from "../actions/contacts";
// Function to get yesterday's date with custom format (MM/DD/YYYY)
const getYesterdayDate = () => {
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  // Format the date as "MM/DD/YYYY"
  const month = String(yesterdayDate.getMonth() + 1).padStart(2, "0");
  const day = String(yesterdayDate.getDate()).padStart(2, "0");
  const year = yesterdayDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
};

// Function to get current date with custom format (DD/MM/YYYY)
const getCurrentDate = () => {
  const currentDate = new Date();

  // Format the date as "DD/MM/YYYY"
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

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

  const {
    name,

    yesterday_task,
    today_task,
    yesterday_date,
    today_date,
    role_block,
  } = formData;

  const updateMyTask = useSelector((state) =>
    currentId ? state.contacts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (updateMyTask) setFormData(updateMyTask);
  }, [updateMyTask]);

  const handleSubmit = () => {
    // e.preventDefault();
    if (currentId) {
      dispatch(updateContact(currentId, formData));
      clear();
    } else {
      dispatch(createContact(formData));
      clear();
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setFormData({
      name: "",
      yesterday_task: "",
      today_task: "",
      role_block: "",
    });
    setCurrentId(0);
  };

  return (
    <div className="w-10/12 m-auto shadow-md ">
      <h1 className="text-center font-bold">Daily Update</h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col text-xl">
          <label className="py-2 px-2" htmlFor="person_name">
            Person
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
            <label className="py-2 px-2" htmlFor="yesterday">
              Yesterday Date
            </label>
            <span>{getYesterdayDate()}</span>
          </div>
          <textarea
            type="text"
            id="yesterday"
            placeholder="Yesterday Task here..."
            className="outline-none w-full border-[1px] p-2"
            name="yesterday_task"
            value={yesterday_task}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-xl">
          <div className="flex items-center justify-between px-2">
            <label className="py-2 px-2" htmlFor="today_task">
              Today Date
            </label>
            <span>{getCurrentDate()}</span>
          </div>
          <textarea
            type="text"
            id="today_task"
            placeholder="Today Task here..."
            className="outline-none w-full border-[1px] p-2"
            name="today_task"
            value={today_task}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-xl">
          <label className="py-2 px-2" htmlFor="role_block">
            Role Block
          </label>
          <textarea
            type="text"
            id="role_block"
            placeholder="Role Back..."
            className="outline-none w-full border-[1px] p-2"
            name="role_block"
            onChange={handleChange}
            value={role_block}
          />
        </div>
        <button
          type="submit"
          className="font-bold text-white  w-full p-2 bg-blue-400 mt-2"
        >
          {currentId ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default Form;
