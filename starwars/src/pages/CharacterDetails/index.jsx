import React, { useContext, useCallback, useEffect } from "react";
import { DetailContentContainer } from "./styles";
import Context from "src/context/context";
import Header from "src/components/Header";
import DetailsCard from "src/components/DetailsCard";
import { useParams, Link } from "react-router-dom";

const CharacterDetails = () => {
  const { people, setPeopleDetail, peopleDetail } = useContext(Context);
  let { id } = useParams();

  const getPerson = useCallback(() => {
    const person = people.filter((person) => person.id === parseInt(id));
    setPeopleDetail(person);
  }, [id, people, setPeopleDetail]);

  useEffect(() => {
    getPerson();
  }, [getPerson]);

  return (
    <>
      <Header />
      <DetailContentContainer>
        {peopleDetail.map((p, index) => (
          <DetailsCard key={index}>
            <img src={p.image} alt={p.name} />
            <h1>{p.name}</h1>
            <p>
              <span>from {p.homeworld}</span>, {p.species}, {p.gender}.
            </p>
          </DetailsCard>
        ))}
        <Link to="/">back</Link>
      </DetailContentContainer>
    </>
  );
};

export default CharacterDetails;
