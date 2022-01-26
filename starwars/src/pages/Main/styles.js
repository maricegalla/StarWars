import styled from "styled-components";
import background from "src/assets/background.jpg";

const MainContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px;
  justify-content: center;
  height: 100%;
  background: url(${background}) repeat-y center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 280px;
  z-index: 10;
`;

export { MainContentContainer };
