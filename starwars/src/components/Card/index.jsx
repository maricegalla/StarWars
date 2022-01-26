import React from 'react';
import {CardContentContainer} from './styles'

const Card = ({children}) => {
  return (
    <CardContentContainer>
      {children}
    </CardContentContainer>
  );
}

export default Card;