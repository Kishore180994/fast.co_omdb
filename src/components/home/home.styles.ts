import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: radial-gradient(purple, black, black);
  color: white;

  .omdb {
    font-weight: 700;
    font-size: 4rem;
    background: linear-gradient(to left, #f2db83, black);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .sub {
    font-size: 1.5rem;
    font-weight: 900;
    text-shadow: 1px 1px 4px #f2db83;
    color: black;
  }
`;
