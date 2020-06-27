import React, { Component } from "react";
import API from "../utils/API";
import employees from "../utils/employees";
import ResultList from "../components/ResultList";



class Employees extends Component {
  state = {
    results: []
  };

  
 
  componentDidMount() {
 
    // API.getAllEmployees()
    // .then(res => this.setState({ results: res.data.data }))
    // .catch(err => console.log(err));

    /////new code

    this.setState({ results: employees })

     /////new code

  }

  

  render() {
    return (
      <div>
        <h1 className="text-center">All Employees</h1>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Employees;
