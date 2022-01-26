import styled from "styled-components";

const CardContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  top: 0;
  width: 200px;
  height: 300px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border: #fff 1px solid;
  border-radius: 10px;

  img {
    height: 10%;
    width: 10%;
  }
`;

export { CardContentContainer };
