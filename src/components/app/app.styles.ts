import styled from 'styled-components';
import { devices } from '../../utils/screen-sizes';

interface Props {
  color: string;
}
export const RouterContainer = styled.div``;

export const Footer = styled.div<Props>`
  background: ${(props) => props.color};
  text-align: center;
  color: white;
  height: 50px;

  @media ${devices.mobileL} {
    margin: 0 auto;
  }
`;
