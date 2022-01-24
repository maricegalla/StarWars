import React from 'react';
import Routes from 'src/Routes'
import Provider from './context/provider';

const App = () => {
  return (
    <Provider >
      <Routes />
    </Provider>
  );
};

export default App;
