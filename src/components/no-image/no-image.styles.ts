import styled from 'styled-components';

export const NoImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid white;
  color: black;
  background: white;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .a {
      font-weight: 700;
      letter-spacing: 2px;
    }
    .b {
      font-size: 0.7rem;
    }
  }
`;
