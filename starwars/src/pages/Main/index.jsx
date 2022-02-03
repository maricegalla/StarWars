import React, { useContext } from "react";
import { MainContentContainer } from "./styles";
import { Link } from "react-router-dom";
import Header from "src/components/Header";
import Context from "src/context/context";

import Card from "src/components/Card";

const Main = () => {
  const { people, searchWord } = useContext(Context);

  console.log(people);
  return (
    <>
      <Header />
      <MainContentContainer>
        {searchWord !== ""
          ? people
              .filter((person) =>
                person.name.toLowerCase().includes(searchWord.toLowerCase())
              )
              .map((person, index) => (
                <Link to={`/character/${person.id}`}>
                  <Card key={index}>
                    <img src={person.image} alt={person.name} />
                    <p>{person.name}</p>
                  </Card>
                </Link>
              ))
          : people.map((person, index) => (
              <Link to={`/character/${person.id}`}>
                <Card key={index}>
                  <img src={person.image} alt={person.name} />
                  <p>{person.name}</p>
                </Card>
              </Link>
            ))}
      </MainContentContainer>
    </>
  );
};

export default Main;
