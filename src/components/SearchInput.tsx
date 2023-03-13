import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface IProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ setKeyword }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const searchNewsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchKeyword = new FormData(e.currentTarget);
    setKeyword(searchKeyword.get("searchInput") as string);
    setHistory((prev) => [...prev, searchKeyword.get("searchInput") as string]);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <InputForm onSubmit={searchNewsSubmit}>
      <InputField type="text" name="searchInput" ref={inputRef} />
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
