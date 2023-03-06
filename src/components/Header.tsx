import React from "react";
import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import styled from "styled-components";
import { InputRef } from "../types/shared";

const Header = ({ inputRef }: InputRef) => {
  return (
    <HeaderBox>
      <NavBar />
      <SearchInput inputRef={inputRef} />
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
