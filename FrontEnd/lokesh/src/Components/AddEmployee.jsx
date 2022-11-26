import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  let initialState = {
    EmpId: "",
    EmpName: "",
    Desg: "",
    DeptId: "",
    DeptName: "",
    Awards: "",
    Salary: "",
    Skills: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function addEmployee() {
    console.log("function works");
    axios.post("http://127.0.0.1:5000/employee", formData).then((resp) => {
      console.log("Success",resp);
      alert("Employee Added Successfully!");
      navigate("/");
    });
    console.log("Success");
  }
  return (
    <>
      <h1 className="text-center">Add Employee Details</h1>
      <div className="container mt-4">
        <div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="EmpId"
              value={formData.EmpId}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Employee Id"
            />
            <label for="floatingInput">Employee Id</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="EmpName"
              value={formData.EmpName}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Employee Name"
            />
            <label for="floatingInput">Employee Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="Desg"
              value={formData.Desg}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Designation"
            />
            <label for="floatingInput">Designation</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="DeptId"
              value={formData.DeptId}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Department Id"
            />
            <label for="floatingInput">Department Id</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="DeptName"
              value={formData.DeptName}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Department Name"
            />
            <label for="floatingInput">Department Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="Awards"
              value={formData.Awards}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Awards"
            />
            <label for="floatingInput">Awards</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="Salary"
              value={formData.Salary}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Salary"
            />
            <label for="floatingInput">Salary</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="Skills"
              value={formData.Skills}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="Skills"
            />
            <label for="floatingInput">Skills</label>
          </div>
          <div className="form-floating mb-3">
            <button className="btn btn-primary btn-sm" onClick={addEmployee}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
