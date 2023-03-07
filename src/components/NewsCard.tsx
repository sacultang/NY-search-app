import React, { useState } from "react";
import { Doc } from "../types/shared";
import styled from "styled-components";
import { setStoredClip, getStoredClip } from "../util/storageUtils";
import { checkClip, filterClip } from "../util/checkClip";
import useClipNews from "../pages/hooks/useClipNews";
interface IProps {
  newsData: Doc;
}
const IMAGE_URL = "https://www.nytimes.com/";
const NewsCard = ({ newsData }: IProps) => {
  const { clipNews, setClipNews } = useClipNews();

  const addClip = (news: Doc) => {
    if (checkClip(clipNews, news._id)) {
      const filterClipArr = clipNews?.filter(
        (clipId) => clipId._id !== newsData._id
      );
      console.log("check");
      console.log(clipNews);
      setClipNews(filterClipArr);
      // setStoredClip(filterClipArr);
    } else {
      console.log("no check");
      console.log(clipNews);
      // setStoredClip([...clipNews, news]);
      setClipNews((prev) => [...prev, news]);
    }

    // console.log(clippedNews);
    // if (clippedNews === undefined) {
    //   setStoredClip([news]);
    //   // if (clippedNews.length > 0 && checkClip(clippedNews, newsData._id)) {
    //   //   const filterClipArr = clippedNews?.filter(
    //   //     (clipId) => clipId._id !== newsData._id
    //   //   );
    //   //   console.log("check");
    //   //   setStoredClip(filterClipArr);
    //   //   setClippedNews!(filterClipArr);
    //   // } else {
    //   //   console.log("no check");
    //   //   setStoredClip([news]);
    //   // }
    // } else if (checkClip(clippedNews, newsData._id)) {
    //   const filterClipArr = clippedNews?.filter(
    //     (clipId) => clipId._id !== newsData._id
    //   );
    //   setStoredClip(filterClipArr);
    //   setClippedNews!(filterClipArr);
    // }
  };
  return (
    <CardBox>
      <h1>{newsData.headline.main}</h1>
      <p>{newsData.abstract}</p>
      <ImgBox>
        <img
          src={IMAGE_URL + newsData.multimedia[0].url}
          alt={newsData.multimedia[0].crop_name}
        />
      </ImgBox>
      <ClipBox>
        <ClipBtn onClick={() => addClip(newsData)}>
          {checkClip(clipNews, newsData._id) ? "Clipped" : "Clip"}
        </ClipBtn>
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
