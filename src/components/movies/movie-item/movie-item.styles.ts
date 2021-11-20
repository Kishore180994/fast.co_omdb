import styled from 'styled-components';
import { devices } from '../../../utils/screen-sizes';

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 300px;
  border: 1px solid black;

  :hover {
    cursor: pointer;
  }

  .focus {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 85%;
    * {
      display: contents;
    }
    .playlist-button {
      border: 1px solid black;
      position: absolute;
      top: 0;
      width: 0px;
      padding: 0px;
      background: none;
      * {
        display: none;
      }
      &:hover,
      * > :hover {
        cursor: pointer;
        box-shadow: 1px 1px 5px black;
      }

      &:active,
      * > :active {
        box-shadow: inset 1px 1px 5px black;
      }
    }
    &:hover {
      background: linear-gradient(to top, black, transparent, transparent);
      * {
        display: block;
      }
    }
  }

  @media ${devices.mobileL} {
    flex-direction: row;
    width: 95%;
    height: 150px;
    box-shadow: 1px 1px 15px purple;
    overflow-y: auto;
    position: relative;
    overflow: hidden;
    .focus {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 85%;
      * {
        display: block;
      }
      .playlist-button {
        top: auto;
        bottom: 0;
        left: auto;
        right: 60px;
        width: 0px;
        padding: 0px;
        * {
          display: block;
        }
      }
      &:hover {
        background: none;
      }
    }

    :active {
      box-shadow: 1px 1px 15px white;
    }
  }
`;

export const ImageContainer = styled.div`
  img,
  .no-image {
    height: 250px;
    width: 100%;
  }
  @media ${devices.mobileL} {
    flex: 1 1 30%;
    img,
    .no-image {
      height: 150px;
      width: 100%;
    }
  }
`;

export const MovieDetails = styled.div`
  text-align: center;
  background: black;
  color: white;
  height: 50px;
  overflow-x: hidden;
  overflow-y: auto;
  @media ${devices.mobileL} {
    flex: 1 1 50%;
    height: 150px;
    padding: 0 10px;
    div {
      padding: 10px 0;
    }
  }
`;

export const PlayListIcon = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  margin: 0;
  background: white;
  div {
    position: absolute;
    top: 3px;
    left: 4px;
    height: 15px;
    width: 12px;
    background: black;
    box-shadow: inset 1px 1px 4px white;
  }
  .play {
    clip-path: polygon(100% 50%, 0 0, 0 100%);
  }
  .delete {
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }
  @media ${devices.mobileL} {
    width: 18px;
    div {
      top: 10%;
      left: 20%;
    }
  }
`;
