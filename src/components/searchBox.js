import React from "react";

const SearchBox = () => {
    return (
        <div className="searchBox">
            <p>Search Here</p>
            <form>
                <div className="row">
                    <div className="col-12">
                        <input type="text" placeholder="   Search for a book"></input>
                    </div>
                </div>
                <button type="button" className="searchButton btn btn-success">Search</button>
            </form>
        </div>
    );
}

export default SearchBox;