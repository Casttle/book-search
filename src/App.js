import React, { Component } from 'react';
import Header from "./components/header";
import SearchBox from "./components/searchBox";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <SearchBox></SearchBox>
          <div className="results">
            <p>Results</p>
            <div className="row justify-content-between">
              <div className="col-4">
                <p>Title of the book</p>
              </div>
              <div className="col-4">
                <button type="button" className="searchButton btn btn-primary">View the Book</button>
                <button type="button" className="searchButton btn btn-info">Save the Book</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                  this is the results section that will have a new box for every book
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
