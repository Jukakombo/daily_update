// Form.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../actions/Contacts";

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

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const [successMessage, setSuccessMessage] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, yesterday_task, today_task, role_block } = formData;

  // const updateMyTask = useSelector((state) =>
  //   currentId ? state.contacts.find((p) => p._id === currentId) : null
  // );

  // useEffect(() => {
  //   if (updateMyTask) setFormData(updateMyTask);
  // }, [updateMyTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createContact(formData));
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-center font-bold text-2xl mb-8">Daily Update</h1>

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
              <option value="">Select task for today</option>
              <option value="task1">Task 1</option>
              <option value="task2">Task 2</option>
              {/* Add more options as needed */}
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
              <option value="">Select task for yesterday</option>
              <option value="task1">Task 1</option>
              <option value="task2">Task 2</option>
              {/* Add more options as needed */}
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
              <option value="role1">Role 1</option>
              <option value="role2">Role 2</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-bold py-2 mt-4"
          >
            Create Task
          </button>

          {successMessage && (
            <p className="border border-green-500 bg-green-500 text-white p-2 rounded-md text-center mt-4">
              Sent successfully
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
