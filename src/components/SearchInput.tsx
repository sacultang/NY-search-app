import { useQuery } from "@tanstack/react-query";
import React, { FormEvent, useRef } from "react";
import styled from "styled-components";
import useSearchNews from "../pages/home/hooks/useSearchNews";
const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchNewsSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current!.value) return;
  };
  const {} = useSearchNews(inputRef.current ? inputRef.current.value : "");
  return (
    <InputForm onSubmit={searchNewsSubmit}>
      <InputField ref={inputRef} />
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
