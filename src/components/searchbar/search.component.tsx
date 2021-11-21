import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputContainer, SearchField } from './search.styles';

// Incoming props.
interface Props {
  onSubmit: (term: string) => void
}

// Search component: Allows user to search for the movie.
const SearchBar: React.FC<Props> = ({ onSubmit}) => {
  const [term, setTerm] = useState('');
  let navigate = useNavigate();
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  };

  // On user submits the movie name request,and redirects to the home page.
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(term);
    navigate(`/fast_omdb/`);
  };
  return (
    <SearchField>
      <form onSubmit={onFormSubmit}>
        <InputContainer>
          <input
            type='text'
            placeholder='Search by title'
            value={term}
            onChange={onInputChange}
          />
          <button type='submit' name='search' className='search'>
            <div className='search-icon'></div>
          </button>
        </InputContainer>
      </form>
    </SearchField>
  );
} 

export default SearchBar;
