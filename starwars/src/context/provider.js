import React, { useEffect, useState } from "react";
import { node } from "prop-types";
import Context from "./context";
import api from "src/services/api";

const Provider = ({ children }) => {

  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const data = await api.get('/all.json');
    const people = data.data;
    setPeople(people);
  };
  
  useEffect(() => {
    getPeople()
  }, []);

  const contextValue = {
    people
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
