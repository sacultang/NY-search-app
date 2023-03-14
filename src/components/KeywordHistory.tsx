import React from "react";
import styled from "styled-components";

import { TiDeleteOutline } from "react-icons/ti";
interface KeywordHistoryProps {
  history: string[];
  keywordClickSearch: (keyword: string) => void;
  removeKeyword: (keyword: string) => void;
}
const KeywordHistory = ({
  history,
  keywordClickSearch,
  removeKeyword,
}: KeywordHistoryProps) => {
  return (
    <HistoryBox>
      최근 검색어
      <HistoryUl>
        {history.map((item, i) => (
          <HistoryLi key={i}>
            <p onClick={() => keywordClickSearch(item)}>{item}</p>
            <div onClick={() => removeKeyword(item)}>
              <TiDeleteOutline size={20} />
            </div>
          </HistoryLi>
        ))}
      </HistoryUl>
    </HistoryBox>
  );
};

export default KeywordHistory;
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
  height: 40px;
`;
const HistoryLi = styled.li`
  list-style: none;
  border-radius: 4px;
  color: #fff;
  margin-right: 3px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    padding: 0 10px;
    height: 100%;
    background-color: royalblue;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      background-color: #5a7de6;
    }
  }
  div {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #5a7de6;
    transition: all 0.3s;
    &:hover {
      background-color: #7391eb;
    }
  }
`;
