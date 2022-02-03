import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Main from 'src/pages/Main';
import Error from 'src/pages/Error';
import CharacterDetails from 'src/pages/CharacterDetails';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Main />} />
      <Route path="/character/:id" element={<CharacterDetails />}/>
      <Route path="*" element={<Error />} />
    </Switch>
  );
}

export default Routes;