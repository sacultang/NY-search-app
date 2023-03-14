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
  const searchNewsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchKeyword = new FormData(e.currentTarget);
    const newKeyword = searchKeyword.get("searchInput") as string;
    setKeyword(newKeyword);
    if (history.indexOf(newKeyword) !== -1) {
      const filteredHistory = history.filter((text) => text !== newKeyword);
      setHistoryFunc(filteredHistory, newKeyword);
    } else {
      setHistoryFunc(history, newKeyword);
    }
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
      <HistoryBox>
        최근 검색어
        <HistoryUl>
          {history.map((item, i) => (
            <HistoryLi key={i}> {item} </HistoryLi>
          ))}
        </HistoryUl>
      </HistoryBox>
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
const HistoryBox = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #dfdfdf65;
  min-width: 500px;
  padding: 0 10px;
  display: flex;
  align-content: center;
  align-items: center;
`;
const HistoryUl = styled.ul`
  margin: 0 10px;
  padding: 0;
  display: flex;
`;
const HistoryLi = styled.li`
  width: 100%;
  list-style: none;
  padding: 10px;
  background-color: royalblue;
  border-radius: 4px;
  color: #fff;
  margin-right: 3px; ;
`;
