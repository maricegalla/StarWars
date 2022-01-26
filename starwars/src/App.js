import React from "react";
import Routes from "src/Routes";
import Provider from "./context/provider";
import Header from "src/components/Header";
import './App.css';

const App = () => {
  return (
    <Provider>
      <Header />
      <Routes />
    </Provider>
  );
};

export default App;
