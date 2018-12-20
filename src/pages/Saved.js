import React, { Component } from "react";
import Header from "../components/header";
import ResultsCard from "../components/Results";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));

    };

    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };



    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header></Header>
                    <ResultsCard>
                        <h2>Results</h2>
                        {this.state.books.length ? (
                            <div>
                                {this.state.books.map(book => (

                                    <div className="resultsCard" key={book._id}>
                                        <div className="row justify-content-between">
                                            <div className="col-4">
                                                <p>{book.title}  authored by {book.authors}</p>
                                            </div>
                                            <div className="col-4">
                                                <button type="button" className="searchButton btn btn-primary"><a href={book.link} target="_blank" rel="noopener noreferrer" >View the Book</a></button>
                                                <button type="button" className="searchButton btn btn-info" id={book._id}>Save the Book</button>
                                                <button type="button" className="btn btn-danger" onClick={() => this.deleteBook(book._id)}>X</button>
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

export default Saved;
