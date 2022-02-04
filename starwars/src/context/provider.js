import React, { useEffect, useState } from "react";
import { node } from "prop-types";
import Context from "./context";
import api from "src/services/api";
import _ from "underscore";

const Provider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [peopleDetail, setPeopleDetail] = useState([]);

  const getPeople = async () => {
    setLoading(true);
    const data = await api.get("/all.json");
    const people = data.data;
    const sortedPeople = _.sortBy(people, "name");
    setPeople(sortedPeople);
    setInterval(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getPeople();
  }, []);

  const contextValue = {
    people,
    setSearchWord,
    searchWord,
    loading,
    setPeopleDetail,
    peopleDetail,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
