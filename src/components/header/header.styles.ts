import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../utils/screen-sizes';

interface Props {
  scrollTopVal: number;
}

export const HeaderContainer = styled.div<Props>`
  display: flex;
  position: sticky;
  top: 0;
  height: 55px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  ${(props) =>
    `background: rgba(128,${100 - props.scrollTopVal},128, ${
      props.scrollTopVal / 100
    })`}
`;

export const SearchContainer = styled.div`
  flex-basis: 40%;
  @media ${devices.mobileL} {
    flex-basis: 35%;
  }
  @media ${devices.mobileS} {
    flex-basis: 20%;
    font-size: 0.6rem;
  }
`;

export const Logo = styled(Link)`
  position: relative;
  height: auto;
  margin-left: 1rem;
  border-radius: 10%;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1px;
  background: linear-gradient(to left, #f2db83, black);
  font-stretch: wider;
  transform: scale(1, 1.2);
  flex-shrink: 0;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  @media ${devices.mobileL} {
    font-size: 1rem;
    background: linear-gradient(to left, #f2db83, white);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media ${devices.mobileS} {
    font-size: 1rem;
  }
`;

export const PlayList = styled(Link)`
  color: white;
  border: 1px solid wheat;
  width: 5.5rem;
  text-align: center;
  padding: 10px 15px;
  margin: 5px 0;
  margin-right: 25px;
  box-shadow: inset 1px 1px wheat;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  .count {
    display: inline-block;
    padding: 3px 5px;
    border: 1px solid white;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: 900;
    background: purple;
    box-shadow: 1px 1px 10px white;
    :hover {
      cursor: pointer;
    }
  }
  .text {
    :hover {
      cursor: pointer;
    }
  }

  :hover,
  * > :hover {
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 1px 2px white;
  }
  :active,
  * > :active {
    transform: translateY(0px);
    box-shadow: inset 1px 1px white;
  }

  @media ${devices.mobileL} {
    padding: 6px 8px;
    margin-right: 15px;
    font-size: small;
    .text {
      margin-top: 3px;
    }
  }
  @media ${devices.mobileS} {
    font-size: 0.6rem;
    width: 4rem;
    .text {
      margin-top: 5px;
    }
  }
`;
