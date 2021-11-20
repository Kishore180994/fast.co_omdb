import styled from 'styled-components';
import { devices } from '../../../utils/screen-sizes';

export const Perimeter = styled.div`
  position: relative;
  .left {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(to right, black, transparent);
    @media ${devices.mobileL} {
      display: none;
    }
  }

  .right {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(to left, black, transparent);
    @media ${devices.mobileL} {
      display: none;
    }
  }
`;

export const MovieListContainer = styled.div`
  position: relative;
  display: flex;
  overflow-y: auto;

  @media ${devices.maxtop} {
    overflow: hidden;
    flex-wrap: wrap;
    margin: 20px;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export const MovieListItem = styled.div`
  width: 200px;
  margin: 10px 5px;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.maxtop} {
    margin: 10px;
    border: 2px solid black;
    box-shadow: 1px 1px 4px black;
  }

  @media ${devices.mobileL} {
    width: 100%;
    margin: 10px;
  }
`;
