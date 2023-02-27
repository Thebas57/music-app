import React from 'react';
import { FiSearch } from 'react-icons/fi';


const SearchBar = () => {
  return (
    <div className='searchbar-container'>
        <form>
          <FiSearch />
          <input type="text" name="" id="" placeholder='Search' />
        </form>
    </div>
  )
}

export default SearchBar