import React, { useContext } from "react";
import { MainContentContainer } from "./styles";
import { Link } from "react-router-dom";
import Header from "src/components/Header";
import Context from "src/context/context";
import Card from "src/components/Card";
import { ReactComponent as Loader } from "src/assets/loading.svg";

const Main = () => {
  const { people, searchWord, loading } = useContext(Context);

  let charctersCard;
  if (searchWord !== "") {
    charctersCard = people
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
      ));
  } else {
    charctersCard = people.map((person, index) => (
      <Link to={`/character/${person.id}`}>
        <Card key={index}>
          <img src={person.image} alt={person.name} />
          <p>{person.name}</p>
        </Card>
      </Link>
    ));
  }

  return (
    <>
      <Header />
      <MainContentContainer>
        {loading ? <Loader /> : charctersCard}
      </MainContentContainer>
    </>
  );
};

export default Main;
