import React from 'react';

const Search = () => {
    return (
        <div className="search-container">
        <input
          id="search"
          type="text"
          placeholder="Search by book name, author"
        />
        <button type="submit" className="btn-search">
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
};

export default Search;