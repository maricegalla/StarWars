import styled from "styled-components";
import background from "src/assets/background.jpg";

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  height: 100%;
  background: url(${background}) repeat-y center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 280px 50px 50px;
  z-index: 10;
  min-height: 100vh;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 50px;
    color: red;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    height: 100%;
  }

  button {
    background-color: transparent;
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    cursor: pointer;
  }
`;

export { MainContentContainer };
