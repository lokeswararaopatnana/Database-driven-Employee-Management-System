import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowEmployees from "./ShowEmployees";

const Home = () => {
  const [employee, setEmployee] = useState();
  function getEmployees() {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .get("http://127.0.0.1:5000/employees")
      .then((resp) => setEmployee(resp.data));
  }
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <h1 className="text-center">Employees Data</h1>

      <div classNameName="container d-flex flex-wrap">
        {employee?.map((emp) => (
          <ShowEmployees emp={emp} />
        ))}
      </div>
    </>
  );
};

export default Home;
