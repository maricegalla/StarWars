import styled from "styled-components";
import background from "src/assets/background.jpg";

const HeaderContentContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  top: 0;
  width: 100%;
  height: fit-content;
  padding: 30px 0 20px;
  background: url(${background}) no-repeat center center fixed;;

  img {
    width: 15%;
  }

  input {
    height: 40px;
    width: 280px;
    border-radius: 20px;
    text-align: center;
    background-color: transparent;
    padding: 5px;
    color: #fff;
    border: 1px solid #fff;
    color: #6FE5D8;
    text-align: center;
    font-weight: 700;
  }
`;

export { HeaderContentContainer };
