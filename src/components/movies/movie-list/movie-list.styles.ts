import styled, { keyframes } from 'styled-components';
import { devices } from '../../../utils/screen-sizes';

const moveInLeft = keyframes`
   from {transform: translateX(-100px);}
    to {transform: translateX(0px);}
`;

const moveInBottom = keyframes`
   from {transform: translateY(100px);color: transparent; display: none}
    to {transform: translateY(0px);}
`;

const buttonMoveIn = keyframes`
   0% {transform: translateY(100px);opacity: 0;}
   90% {transform: translateY(100px);opacity: 0;}
    100% {transform: translateY(0px);}
`;

const moveInRight = keyframes`
   from {transform: translateX(100px);color: transparent}
    to {transform: translateX(0px);}
`;

export const ListContainer = styled.div`
  overflow: auto;
  overscroll-behavior: contain;
  @media ${devices.mobileL} {
    min-width: 350px;
  }
`;

export const ChildContainer = styled.div`
  @media ${devices.mobileL} {
    height: 60vh;
    overflow: auto;
  }
`;

export const BackgroundImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  background: radial-gradient(purple, black, black);
  height: 30em;
  color: white;
  .left-detail {
    display: flex;
    flex-direction: column;
    text-align: right;
    flex: 1;
    padding-right: 20px;
    transition: all 1s;
    overflow-y: auto;
    .title {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      word-wrap: break-word;
      color: white;
      animation: ${moveInLeft} 1s ease-in;
    }
    .sub-details {
      /* border: 1px solid wheat; */
      text-align: center;
      display: flex;
      flex-direction: column;
      width: 70%;
      margin-left: auto;
      margin-top: 7%;
      padding-right: 10px;
      padding-top: 10px;
      float: right;
      animation: ${moveInBottom} 1s ease-in;
      div {
        display: flex;
        padding-bottom: 20px;
        label {
          flex: 1;
          text-align: left;
        }
        label:first-child {
          text-align: right;
          padding-right: 20px;
          font-weight: 700;
        }
      }
    }
    .button {
      animation: ${buttonMoveIn} 1s ease-in;
      margin: 10px;
    }
  }

  .right-detail {
    flex: 1;
    padding-left: 20px;
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 40px;
    overflow-y: auto;
    animation: ${moveInRight} 1s ease-in;
    .item {
      display: flex;
      padding-bottom: 20px;
      label {
        text-align: left;
        width: 80%;
      }
      label:first-child {
        text-align: right;
        font-weight: 700;
        padding-right: 20px;
        width: 20%;
      }
    }
    .plot {
      border-top: 1px solid wheat;
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      label:first-child {
        font-weight: 700;
        font-size: 1.1rem;
        text-align: center;
      }
      label:last-child {
        text-align: center;
        padding: 10px;
        overflow-y: auto;
        height: 10%;
      }
    }
  }

  @media ${devices.mobileL} {
    height: 40vh;
    min-width: 95%;
    box-shadow: inset 0 -5px 5px white;
    position: relative;
    overflow: auto;
    .left-detail {
      order: 1;
      text-align: left;
      padding-left: 20px;
      height: 75%;
      .title {
        font-size: 1.3rem;
      }
      .sub-details {
        width: 100%;
        margin-top: 3%;
        padding-top: 5px;
        font-size: 0.7rem;
        div {
          padding-bottom: 20px;
          label {
            flex: 1;
            text-align: left;
          }
          label:first-child {
            text-align: left;
            padding-right: 0px;
          }
        }
      }

      .button {
        position: absolute;
        right: 20px;
        bottom: 0;
      }
    }
    .right-detail {
      display: none;
    }
  }
`;

export const BackgroundImage = styled.div`
  position: relative;
  img,
  .no-image {
    z-index: -99;
    height: 90%;
    width: 300px;
    box-shadow: 15px 15px 20px black;
  }

  .top {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 80%;
    font-weight: 700;
    width: 20%;
    height: 5%;
    label {
      display: block;
      margin-top: 5px;
    }
  }

  .left {
    position: absolute;
    bottom: 10%;
    left: 0;
    font-size: 1rem;
    font-weight: 700;
    width: 20%;
    height: 5%;
  }

  .right {
    position: absolute;
    bottom: 10%;
    right: 0;
    font-size: 2rem;
    font-weight: 700;
    width: 20%;
    height: 20%;
  }

  .image-cover {
    display: flex;
    z-index: 1;
    background: rgba(255, 0, 255, 0.7);
    color: white;
    text-align: center;
    flex-direction: column;
    .star {
      height: 50%;
      background: gold;
      margin: 5px 2px;
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
  }

  @media ${devices.mobileL} {
    width: 150px;
    margin-left: 10px;
    img,
    .no-image {
      max-width: 150px;
      box-shadow: 1px 1px 20px white;
    }
    .top {
      font-size: 75%;
      height: 12%;
    }
    .left {
      font-size: 0.7rem;
      font-weight: 700;
      width: 20%;
      height: 11%;
    }
    .right {
      font-size: 1rem;
      font-weight: 700;
      width: 20%;
      height: 20%;
    }
  }
`;
