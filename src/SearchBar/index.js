import React from 'react';
import './SearchBar.css';
import { ItemContext } from '../ItemContext';

function SearchBar() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(ItemContext);

  return(
    <input
      placeholder="Search..."
      className="search"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { SearchBar };