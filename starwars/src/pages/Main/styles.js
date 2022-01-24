import styled from "styled-components";
import background from "src/assets/background.jpg";

const MainContentContainer = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export { MainContentContainer };
