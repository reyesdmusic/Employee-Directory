import React from "react";

function ResultList(props) {
  return (
    // <ul className="list-group">
    //   {props.results.map(result => (
    //     <ul  key={result.id}>
    //       <li className="list-group-item">ID: {result.id}</li>
    //       <li className="list-group-item">Name: {result.employee_name}</li>
    //       <li className="list-group-item">Age: {result.employee_age}</li>
    //       <li className="list-group-item">Salary: {result.employee_salary}</li>
    //     </ul>
    //   ))}
    // </ul>


    ////new code
    <table class="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>

    {props.results.map(result => (
        // <ul  key={result.id}>
        //   <li className="list-group-item">ID: {result.id}</li>
        //   <li className="list-group-item">Name: {result.employee_name}</li>
        //   <li className="list-group-item">Age: {result.employee_age}</li>
        //   <li className="list-group-item">Salary: {result.employee_salary}</li>
        // </ul>
        <tr>
        <td>{result.id}</td>
        <td>{result.employee_name}</td>
        <td>{result.employee_age}</td>
        <td>{result.employee_salary}</td>
      </tr>

      ))}
      
    </tbody>
  </table>
    ////new code


  );
}

export default ResultList;
