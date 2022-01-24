import React from 'react';
import Routes from 'src/Routes'
import Header from './components/Header';
import Provider from './context/provider';

const App = () => {
  return (
    <Provider >
      <Header/>
      <Routes />
    </Provider>
  );
};

export default App;
