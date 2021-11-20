import styled from 'styled-components';
import { devices } from '../../../utils/screen-sizes';

export const PlayListContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  background: radial-gradient(purple, black, black);
  .list-view {
    display: flex;
    margin: 0 20px;
    margin-top: 5rem;
    flex-wrap: wrap;
    overflow-y: auto;
    .movie {
      flex: 1 0 200px;
      max-width: 200px;
      min-height: 250px;
      margin: 10px;
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    * {
      margin: 10px;
      label {
        font-size: medium;
        font-weight: 500;

        :hover {
          cursor: pointer;
        }
      }
    }
  }

  @media ${devices.mobileL} {
    height: 100vh;
    overflow: hidden;
    .list-view {
      display: flex;
      height: 70%;
      margin-top: 8%;
      overflow-y: auto;
      overscroll-behavior: contain;
      .movie {
        flex: 1 0 100%;
        max-width: 100%;
        min-height: 100px;
      }
    }
    .buttons {
      margin-top: 20px;
      * {
        label {
          font-size: 0.9rem;
          font-weight: 500;
          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const EmptyPlayList = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  border: 1px solid white;
  text-align: center;
  color: white;
  label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
