import React, { Component } from "react";
import Header from "../components/header";
import SearchBox from "../components/searchBox";
import ResultsCard from "../components/Results";

class Search extends Component {
    render() {
      return (
        <div className="App">
          <div className="container">
            <Header></Header>
            <SearchBox></SearchBox>
            <div className="results">
              <h2>Results</h2>
              <ResultsCard></ResultsCard>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Search;
  