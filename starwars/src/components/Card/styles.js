import styled from "styled-components";

const CardContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  top: 0;
  width: 200px;
  height: 300px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border: #fff 1px solid;
  border-radius: 10px;
  text-decoration: none;

  img {
    width: fit-content;
    max-height: 200px;
    border-radius: 10px;
  }

  p {
    color: #6FE5D8;
    text-align: center;
    font-weight: 700;
  }

  :hover {
   transform: scale(1.1);
   transition: transform 400ms ease-in-out;
  }
`;

export { CardContentContainer };
