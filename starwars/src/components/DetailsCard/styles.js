import styled from "styled-components";

const DetailsCardContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  top: 0;
  width: 300px;
  height: 400px;
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

  h1 {
    color: #6FE5D8;
    text-align: center;
    font-weight: 700;
  }

  p {
    color: #fff;
    text-align: center;
  }

  span {
    color: #fff;
    text-align: center;
    text-transform: capitalize;
  }
`;

export { DetailsCardContentContainer };
