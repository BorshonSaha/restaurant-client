import React, { useEffect, useState } from "react";
import { Container, Table, Spinner, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [updateID, setUpdateID] = useState();

  const updateStaff = () => {
    const updateName = document.getElementById("name").value;
    const updateAddress = document.getElementById("address").value;
    const updateNumber = document.getElementById("number").value;
    const updateSalary = document.getElementById("salary").value;

    const updateData = {
      updateName,
      updateAddress,
      updateNumber,
      updateSalary,
    };

    fetch(`https://restaurant-server5.onrender.com/updateStaff/${updateID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    }).then((response) => response.json());
  };

  const editStaff = (id) => {
    setUpdateID(id);
    // console.log(updateID);
    for (let i = 0; i < staff.length; i++) {
      if (staff[i]._id == id) {
        // console.log(staff[i].name, staff[i].price);
        document.getElementById("name").value = staff[i].name;
        document.getElementById("address").value = staff[i].address;
        document.getElementById("number").value = staff[i].number;
        document.getElementById("salary").value = staff[i].salary;
      }
    }
  };

  const deleteStaff = (id) => {
    // console.log(id);
    fetch(`https://restaurant-server5.onrender.com/deleteStaff/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    fetch("https://restaurant-server5.onrender.com/getStaff")
      .then((response) => response.json())
      .then((data) => setStaff(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="App">Staff List</h1>
      <Container>
        <Table striped bordered hover>
          {staff.length === 0 && <Spinner animation="border"></Spinner>}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          {staff.map((staffs) => (
            <tbody>
              <tr>
                <td>{staffs.name}</td>
                <td>{staffs.address}</td>
                <td>{staffs.number}</td>
                <td>{staffs.salary}</td>
                <td>
                  <Button
                    onClick={() => deleteStaff(staffs._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => editStaff(staffs._id)}
                    variant="success"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <h1 className="mt-5">Update Box</h1>
        <div className="from-group pt-3">
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            required
          />
        </div>
        <div className="from-group pt-3">
          <input
            type="text"
            id="address"
            className="form-control"
            name="address"
            required
          />
        </div>
        <div className="from-group pt-3">
          <input
            type="number"
            id="number"
            className="form-control"
            name="number"
            required
          />
        </div>
        <div className="from-group pt-3">
          <input
            type="number"
            id="salary"
            className="form-control"
            name="salary"
            required
          />
        </div>
        <div className="from-group pt-3 mb-5">
          <Button onClick={updateStaff}>Save Changes</Button>
        </div>
      </Container>
    </div>
  );
};

export default StaffList;
