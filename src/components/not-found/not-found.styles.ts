import styled from 'styled-components';

export const EmptyContainer = styled.div`
  position: relative;
  color: white;
  width: 100vw;
  height: 100vh;
  text-align: center;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .site {
      font-weight: 700;
      font-size: 3rem;
      text-shadow: 1px 5px 10px white;
      letter-spacing: 10px;
      margin-bottom: 10px;
    }
  }
`;
