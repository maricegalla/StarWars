import React from "react";
import { HeaderContentContainer } from "./styles";
import Logo from "src/assets/logo.png";

const Header = (props) => {
  return (
    <HeaderContentContainer>
      <img src={Logo} alt="Logo" />
      <input type="text" placeholder="Type character name"></input>
    </HeaderContentContainer>
  );
};

export default Header;
