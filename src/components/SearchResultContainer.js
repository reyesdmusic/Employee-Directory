import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";



class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    names: [],
    searchedEmployee: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getAllEmployees()
    .then(res => this.setState({ results: res.data.data }))
    .catch(err => console.log(err));

    let apiNames = [];

    API.getAllEmployees()
      .then(res => res.data.data.map(result => (
        apiNames.push(result.employee_name)
      )))
      .catch(err => console.log(err));
      this.setState({ names: apiNames })
   
      console.log(apiNames);
    
  }

  searchEmployee = query => {
    API.getAllEmployees()
    .then(res => this.setState({ searchedEmployee: res.data.data.filter(result => result.employee_name === query)}))
   
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          names={this.state.names}
        />
        <ResultList results={this.state.searchedEmployee} />
      </div>
    );
  }
}

export default SearchResultContainer;
