import React, { useContext } from "react";
import { MainContentContainer } from "./styles";
import Context from "src/context/context";

import Card from "src/components/Card";

const Main = () => {
  const { people } = useContext(Context);
  console.log(people)

  return (
    <MainContentContainer>
      {people.map((pearson, index) => (
        <Card key={index}>
          <img src={pearson.image} alt={pearson.name}/>
          <p>{pearson.name}</p>
        </Card>
      ))}
    </MainContentContainer>
  );
};

export default Main;
