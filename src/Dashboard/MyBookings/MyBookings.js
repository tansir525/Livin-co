import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyBookings = () => {
  const { user } = useAuth();
  console.log(user.email);

  const [mybookings, setMybookings] = useState([]);

  useEffect(() => {
    const url = `https://infinite-beyond-28980.herokuapp.com/services?email=${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMybookings(data));
  }, []);
  return (
    <div>
      <h1 className="mb-5 p-5">My Total bookings {mybookings.length}</h1>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="My Bookings">
          <TableHead>
            <TableRow className="bg-info ">
              <TableCell>Name</TableCell>
              <TableCell align="right">Booking Details</TableCell>
              <TableCell align="right">Add-on</TableCell>
              <TableCell align="right">Phone No</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="container">
            {mybookings.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.img}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyBookings;
