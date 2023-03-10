import React, { useCallback, useState } from "react";
import { Doc } from "../types/shared";
import styled, { keyframes } from "styled-components";
import { setStoredClip, LOCALSTORAGE_KEY } from "../util/storageUtils";
import { checkClip, filterClip } from "../util/checkClip";
import { useClip } from "../context/useClipContext";
import defaultImg from "../assets/react.svg";
interface IProps {
  newsData: Doc;
}
const IMAGE_URL = "https://www.nytimes.com/";
const NewsCard = ({ newsData }: IProps) => {
  const [loaded, setLoaded] = useState(false);
  const { clipNews, setClipNews } = useClip();
  const handleOnLoad = () => setLoaded(true);
  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const imgElement = e.target as HTMLImageElement;
    imgElement.src = defaultImg;
  };
  const addClip = useCallback(
    (news: Doc) => {
      let updatedClipNews: Doc[] = [];
      if (checkClip(clipNews, news._id)) {
        updatedClipNews = filterClip(clipNews, news._id);
      } else {
        updatedClipNews = [...clipNews, news];
      }
      if (updatedClipNews) {
        setClipNews(updatedClipNews);
        setStoredClip(updatedClipNews, LOCALSTORAGE_KEY.clip);
      }
    },
    [clipNews, setClipNews]
  );

  return (
    <CardBox>
      <h1>{newsData.headline.main}</h1>
      <p>{newsData.abstract}</p>
      <ImgBox>
        {newsData.multimedia.length > 0 ? (
          <img
            src={IMAGE_URL + newsData.multimedia[0].url}
            alt={newsData.multimedia[0].crop_name}
            onLoad={handleOnLoad}
            onError={handleOnError}
          />
        ) : (
          <img src={defaultImg} alt="default" />
        )}

        {!loaded && <ImgSkeleton />}
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
  position: relative;
  img {
    width: 100%;
    position: absolute;
    top: 0;
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
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #5a7de6;
  }
`;

const SkeletonAnimation = keyframes`
      0% {
        background-color: rgba(165, 165, 165, 0.1);
        color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
        color: rgba(165, 165, 165, 0.1);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
        color: rgba(165, 165, 165, 0.1);
    }
    `;
const ImgSkeleton = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  animation: ${SkeletonAnimation} 1.8s infinite ease-in-out;
`;
