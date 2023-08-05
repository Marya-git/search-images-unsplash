import './SearchBar.css';
import { useState } from 'react';
import SearchIcon from '../search-icon.png';


function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <h2 className='title' >Welcome! Images Search App using React and Unsplash API </h2>
      <form onSubmit={handleFormSubmit}>
        <input type='search' placeholder='Search Anything ...' value={term} onChange={handleChange} />
        <button>
          <img src={SearchIcon} className='imgbutton' alt='search icon'/>
          
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
