import React, { useContext } from "react";
import { HeaderContentContainer } from "./styles";
import Logo from "src/assets/logo.png";
import Context from "src/context/context";

const Header = (props) => {
  const { setSearchWord, searchWord } = useContext(Context);

  const { pathname } = window.location;

  return (
    <HeaderContentContainer>
      {pathname === "/" ? (
        <>
          <img src={Logo} alt="Logo" />
          <input
            type="search"
            placeholder="Type character name"
            onChange={(e) => setSearchWord(e.target.value)}
            value={searchWord}
          />
        </>
      ) : (
        <>
          <img src={Logo} alt="Logo" />
        </>
      )}
    </HeaderContentContainer>
  );
};

export default Header;
