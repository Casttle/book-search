import React from "react";

const ResultsCard = () => {
    return (
        <div className="resultsCard">
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
        <div className="row">
          <div className="col-3">
            <img src="https://via.placeholder.com/200/0000FF/808080" alt="placeholder"></img>
          </div>
          <div className="col-9 bookSummary">
            <p>This is the summary or discription of the book</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ResultsCard;
  