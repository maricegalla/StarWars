import styled from "styled-components";
import background from "src/assets/background.jpg";

const ErrorContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  height: 100%;
  background: url(${background}) repeat-y center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 10;
  min-height: 100vh;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    height: fit-content;
    font-size: 300px;
    color: #dba90d;
  }

  p {
    height: fit-content;
    font-size: 20px;
    color: #6fe5d8;
    text-align: center;
  }

  small {
    height: fit-content;
    color: #6fe5d8;
    text-align: center;
  }

  a {
    color: #6fe5d8;
    font-weight: bold;
  }

  img {
    height: 280px;
  }

  .column {
    flex-direction: column;
    gap: 20px;
  }
`;

export { ErrorContentContainer };
