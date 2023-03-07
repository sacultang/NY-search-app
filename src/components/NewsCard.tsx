import React from "react";
import { Doc } from "../types/shared";
import styled from "styled-components";
interface NewsData {
  newsData: Doc;
}
const NewsCard = ({ newsData }: NewsData) => {
  return (
    <CardBox>
      <h1>{newsData.headline.main}</h1>
      <p>{newsData.abstract}</p>
    </CardBox>
  );
};

export default NewsCard;

const CardBox = styled.div`
  border: 1px solid gray;
  padding: 20px;
`;
