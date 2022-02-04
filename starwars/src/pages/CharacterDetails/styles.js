import styled from "styled-components";
import background from "src/assets/background.jpg";

const DetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 30px;
  background: url(${background}) repeat-y center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 280px 50px 50px;
  z-index: 10;
  min-height: 100vh;

  a {
    color: #6fe5d8;
    font-weight: bold; 
    text-decoration: none;
  }
`;

export { DetailContentContainer };
