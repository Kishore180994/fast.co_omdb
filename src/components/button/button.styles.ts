import styled from 'styled-components';
import { devices } from '../../utils/screen-sizes';

interface Props {
  padding: string;
}

export const ButtonContainer = styled.button<Props>`
  padding: ${(props) => props.padding};
  color: white;
  background: purple;
  box-shadow: inset 1px 1px 4px white;
  :hover {
    cursor: pointer;
    box-shadow: 1px 1px 7px white;
  }
  :active {
    box-shadow: inset 1px 1px 4px white;
  }

  @media ${devices.mobileL} {
    text-align: center;
  }
`;
