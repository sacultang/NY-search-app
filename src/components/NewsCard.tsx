import React from "react";
import { Doc } from "../types/shared";
import styled from "styled-components";
interface NewsData {
  newsData: Doc;
}
const URL = "https://www.nytimes.com/";
const NewsCard = ({ newsData }: NewsData) => {
  console.log(newsData);
  return (
    <CardBox>
      <h1>{newsData.headline.main}</h1>
      <p>{newsData.abstract}</p>
      <ImgBox>
        <img
          src={URL + newsData.multimedia[0].url}
          alt={newsData.multimedia[0].crop_name}
        />
      </ImgBox>
      <ClipBox>
        <ClipBtn>Clip</ClipBtn>
      </ClipBox>
    </CardBox>
  );
};

export default NewsCard;

const CardBox = styled.div`
  border: 1px solid gray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const ClipBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
`;
const ClipBtn = styled.button`
  border: none;
  background-color: royalblue;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
`;
