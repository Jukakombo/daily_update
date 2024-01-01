/* eslint-disable react/prop-types */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteContact } from "../actions/contacts";

const TableData = ({ tasks, setCurrentId }) => {
  return (
    <div className="w-10/12 m-auto">
      <div className="bg-blue-100 font-bold p-2 my-2 text-center">
        Daily Update Table
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Yesterday Task</TableCell>
              <TableCell align="left">Yesterday Date</TableCell>
              <TableCell align="left">Today Task</TableCell>
              <TableCell align="left">Today Date</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.yesterday_task}</TableCell>
                <TableCell align="left">{row.yesterday_date}</TableCell>
                <TableCell align="left">{row.today_task}</TableCell>
                <TableCell align="left">{row.today_date}</TableCell>
                <div className="flex justify-between items-center px-4">
                  <button onClick={() => setCurrentId(row._id)}>
                    <FaEdit size={20} className="text-green-500" />
                  </button>
                  <button onClick={deleteContact(row._id)}>
                    <MdDelete size={20} className="text-red-500" />
                  </button>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
