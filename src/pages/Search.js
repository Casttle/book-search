import React, { Component } from "react";
import Header from "../components/header";
import SearchBox from "../components/searchBox";
import ResultsCard from "../components/Results";

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

   // Need code to access the book search api and dislplay the results in this pages ResultsCard

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header></Header>
                    <SearchBox></SearchBox>

                    <ResultsCard>
                        <h2>Results</h2>
                        {this.state.books.length ? (
                            <div>
                                {this.state.books.map(book => (

                                    <div className="resultsCard">
                                        <div className="row justify-content-between">
                                            <div className="col-4">
                                                <p>{book.title}  authored by {book.authors}</p>
                                            </div>
                                            <div className="col-4">
                                                <button type="button"  className="searchButton btn btn-primary"><a href={book.link} target="_blank"rel="noopener noreferrer" >View the Book</a></button>
                                                <button type="button" className="searchButton btn btn-info" id={book._id}>Save the Book</button>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={book.image} alt="placeholder"></img>
                                            </div>
                                            <div className="col-9 bookSummary">
                                                <p>{book.description}</p>
                                            </div>
                                        </div>
                                    </div>


                                ))
                                }
                            </div>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}

                    </ResultsCard>
                </div>
            </div>
        );
    }
}

export default Search;
