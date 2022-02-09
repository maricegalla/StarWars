import styled from "styled-components";
import background from "src/assets/background.jpg";

const DetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 80px;
  background: url(${background}) repeat-y center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 280px 50px 50px;
  z-index: 10;
  min-height: 100vh;

  button {
    background-color: transparent;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
  }
`;

export { DetailContentContainer };
