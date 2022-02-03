import React, { useContext } from "react";
import { DetailContentContainer } from "./styles";
import Context from "src/context/context";

const CharacterDetails = () => {
  const { people } = useContext(Context);

  console.log(people);
  return <DetailContentContainer>Teste</DetailContentContainer>;
};

export default CharacterDetails;
