import styled from "styled-components";

const HeaderContentContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  top: 0;
  width: 100%;
  height: 160px;
  padding: 30px 0 20px;
  background-color: rgba(0, 0, 0, 0.5);

  img {
    height: 50%;
  }

  input {
    height: 30px;
    width: 280px;
    border-radius: 20px;
    text-align: center;
    background-color: transparent;
    padding: 5px;
    color: #fff;
  }
`;

export { HeaderContentContainer };
