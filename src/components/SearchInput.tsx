import { useQuery } from "@tanstack/react-query";
import React, { FormEvent, useRef } from "react";
import styled from "styled-components";

interface IProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ setKeyword }: IProps) => {
  const searchNewsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchKeyword = new FormData(e.currentTarget);
    setKeyword(searchKeyword.get("searchInput") as string);
  };

  return (
    <InputForm onSubmit={searchNewsSubmit}>
      <InputField type="text" name="searchInput" />
      <SearchBtn>Search</SearchBtn>
    </InputForm>
  );
};

export default SearchInput;
const InputForm = styled.form`
  height: 40px;
`;
const InputField = styled.input`
  width: 250px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid gray;
  outline: none;
  margin-right: 10px;
`;
const SearchBtn = styled.button`
  height: 100%;
  border: none;
  background-color: royalblue;
  color: #fff;
  border-radius: 8px;
`;
