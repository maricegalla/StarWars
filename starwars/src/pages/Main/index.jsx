import React, { useContext } from "react";
import { MainContentContainer } from "./styles";
import Header from "src/components/Header";
import Context from "src/context/context";

import Card from "src/components/Card";

const Main = () => {
  const { people, searchWord } = useContext(Context);

  return (
    <MainContentContainer>
      <Header />
      {searchWord !== ""
        ? people
            .filter((person) =>
              person.name.toLowerCase().includes(searchWord.toLowerCase())
            )
            .map((pearson, index) => (
              <Card key={index}>
                <img src={pearson.image} alt={pearson.name} />
                <p>{pearson.name}</p>
              </Card>
            ))
        : people.map((pearson, index) => (
            <Card key={index}>
              <img src={pearson.image} alt={pearson.name} />
              <p>{pearson.name}</p>
            </Card>
          ))}
    </MainContentContainer>
  );
};

export default Main;
