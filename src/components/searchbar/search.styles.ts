import styled from 'styled-components';
import { devices } from '../../utils/screen-sizes';

export const SearchField = styled.div`
  width: 100%;
  height: 100%;
  form {
    height: 100%;
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  margin: 5px 0;
  input {
    margin-left: 10px;
    border: 0;
    width: 90%;
    padding: 5px 0;
    transition: all 0.2s;
    background: white;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    :focus {
      outline: none;
    }
  }

  .search {
    border-radius: 50%;
    margin-right: 5px;
    background: white;
    .search-icon {
      border: 4px solid black;
      border-radius: 50%;
    }
  }

  @media ${devices.mobileL} {
    input {
      margin-left: 10px;
    }
  }
`;
