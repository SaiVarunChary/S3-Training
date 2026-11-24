import React, { useState } from "react";

const Employee = () => {
  const [employees] = useState([
    {
      id: 1,
      name: "Sai varun",
      designation: "Developer",
      salary: 77777.77,
      location: "Hyderabad",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      designation: "Senior Developer",
      salary: 85000.5,
      location: "Bangalore",
    },
    {
      id: 3,
      name: "Priya Sharma",
      designation: "QA Engineer",
      salary: 65000.25,
      location: "Pune",
    },
    {
      id: 4,
      name: "Arjun Reddy",
      designation: "Tech Lead",
      salary: 120000.0,
      location: "Chennai",
    },
    {
      id: 5,
      name: "Anjali Mehta",
      designation: "UI/UX Designer",
      salary: 70000.75,
      location: "Mumbai",
    },
  ]);

  return (
    <div>
      <h2>Employee Details</h2>
    <center>
      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>
              <td>{emp.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
};

export default Employee;
