import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ShowEmployees = ({emp}) => {
  const navigate = useNavigate();
  function editEmp(){
    console.log("function works");
      navigate("/edit")
  
}
  const deleteEmp = (EmpId) => {
    axios.delete(`http://localhost:5000/employee/${EmpId}`).then((resp) => {
      console.log(resp);
      alert("employee deleted succcessfully!");
      window.location.reload(true);
      navigate("/");
    });
  };
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">EmployeeId : {emp.EmpId}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          EmployeeName :{emp.EmpName}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Designation : {emp.Desg}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          DepartmentId : {emp.DeptId}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          DepartmentName : {emp.DeptName}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">Awards : {emp.Awards}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Salary : {emp.Salary}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Skills : {emp.Skills}</h6>
        <div className="form-floating mb-3">
            <button className="btn btn-primary btn-sm" onClick={editEmp}>Edit</button>
          </div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => deleteEmp(emp.EmpId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowEmployees;
