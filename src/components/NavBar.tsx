import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const NavBar = () => {
  return (
    <>
      <Title>NewYork Times</Title>
      <LinkBox>
        <LinkBtn to="/">Home</LinkBtn>
        <LinkBtn to="/clip">Clip</LinkBtn>
      </LinkBox>
    </>
  );
};

export default NavBar;
const LinkBox = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`;
const LinkBtn = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  color: #7f7f7f;
  background-color: #cecece;
  margin: 5px;
  border-radius: 5px;
  &.active {
    color: #fff;
    background-color: royalblue;
  }
`;
const Title = styled.h1``;
