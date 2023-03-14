import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import {
  getStoredHistory,
  setStoredHistory,
  LOCALSTORAGE_KEY,
} from "../util/storageUtils";
import KeywordHistory from "./KeywordHistory";
interface IProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ setKeyword }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const storedHistory = getStoredHistory(LOCALSTORAGE_KEY.history);
  const setHistoryFunc = useCallback(
    (history: string[], newkeyword: string) => {
      const updatedHistory = [...history, newkeyword].slice(-5);
      setStoredHistory(updatedHistory, LOCALSTORAGE_KEY.history);
      setHistory(updatedHistory);
    },
    []
  );
  const filterHistory = (history: string[], keyword: string) => {
    return history.filter((text) => text !== keyword);
  };
  const searchNewsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchKeyword = new FormData(e.currentTarget);
    const newKeyword = searchKeyword.get("searchInput") as string;
    setKeyword(newKeyword);
    if (history.indexOf(newKeyword) !== -1) {
      setHistoryFunc(filterHistory(history, newKeyword), newKeyword);
    } else {
      setHistoryFunc(history, newKeyword);
    }
  };
  const keywordClickSearch = (keyword: string) => {
    setKeyword(keyword);
    if (inputRef.current) inputRef.current.value = keyword;
  };
  const removeKeyword = (keyword: string) => {
    filterHistory(history, keyword);
    setStoredHistory(filterHistory(history, keyword), LOCALSTORAGE_KEY.history);
    setHistory(filterHistory(history, keyword));
  };
  useEffect(() => {
    inputRef.current?.focus();
    setHistory(storedHistory);
  }, []);
  return (
    <Container>
      <InputForm onSubmit={searchNewsSubmit}>
        <InputField type="text" name="searchInput" ref={inputRef} />
        <SearchBtn>Search</SearchBtn>
      </InputForm>
      <KeywordHistory
        history={history}
        keywordClickSearch={keywordClickSearch}
        removeKeyword={removeKeyword}
      />
    </Container>
  );
};

export default SearchInput;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
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
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #5a7de6;
  }
`;
