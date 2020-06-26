import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <ul  key={result.id}>
          <li className="list-group-item">ID: {result.id}</li>
          <li className="list-group-item">Name: {result.employee_name}</li>
          <li className="list-group-item">Age: {result.employee_age}</li>
          <li className="list-group-item">Salary: {result.employee_salary}</li>
        </ul>
      ))}
    </ul>


  );
}

export default ResultList;
