import { useState } from 'react';

import SearchBar from "material-ui-search-bar";

const SearchForm = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    if(typeof newValue === String) {
      setValue(newValue)
    }
  }

  return (
    <div>
      <SearchBar
        value={value}
        onChange={handleChange}
        onRequestSearch={(param) => props.onSearch(param)}
        onCancelSearch={props.onCancelSearch}
        cancelOnEscape={true}
      />
    </div>
  );
}

export default SearchForm;