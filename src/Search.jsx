import React from 'react';

const Search = () => {
    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search movie title" />
        </form>
    );
};

export default Search;