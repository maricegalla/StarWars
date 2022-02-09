import React, { useContext, useCallback, useEffect } from "react";
import { DetailContentContainer } from "./styles";
import Context from "src/context/context";
import Header from "src/components/Header";
import DetailsCard from "src/components/DetailsCard";
import { useParams, useNavigate } from "react-router-dom";
import { GrUndo } from "react-icons/gr";

const CharacterDetails = () => {
  const { people, setPeopleDetail, peopleDetail } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

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
            {p.homeworld ? (
              <p>
                <span>from {p.homeworld}</span>, {p.species}, {p.gender}.
              </p>
            ) : (
              <p>
                <span>{p.species}</span>, {p.gender}.
              </p>
            )}
          </DetailsCard>
        ))}
        <button onClick={() => navigate(-1)}>
          <GrUndo />
        </button>
      </DetailContentContainer>
    </>
  );
};

export default CharacterDetails;
