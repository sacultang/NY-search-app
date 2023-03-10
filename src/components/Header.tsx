import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <NavBar />
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
