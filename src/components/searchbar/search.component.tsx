import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputContainer, SearchField } from './search.styles';

interface Props {
  onSubmit: (term: string) => void
}

const SearchBar: React.FC<Props> = ({ onSubmit}) => {
  const [term, setTerm] = useState('');
  let navigate = useNavigate();
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(term);
    navigate(`/`);
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
        </InputContainer>
      </form>
    </SearchField>
  );
} 

// class SearchBar extends React.Component<Props, State> {
//   state = { term: '' };

//   onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ term: e.target.value });
//   };

//   onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.term);

//   };

//   render() {
//     return (
//       <SearchField>
//         <form onSubmit={this.onFormSubmit}>
//           <InputContainer>
//             <input
//               type='text'
//               placeholder='Search by title'
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </InputContainer>
//         </form>
//       </SearchField>
//     );
//   }
// }

export default SearchBar;
