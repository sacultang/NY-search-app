import React, { useCallback, useState } from "react";
import { Doc } from "../types/shared";
import styled from "styled-components";
import { setStoredClip } from "../util/storageUtils";
import { checkClip, filterClip } from "../util/checkClip";
import { useClip } from "../context/useClipContext";
import defaultImg from "../assets/react.svg";
import { ImgSkeleton } from "./Skeleton";
interface IProps {
  newsData: Doc;
}
const IMAGE_URL = "https://www.nytimes.com/";
const NewsCard = ({ newsData }: IProps) => {
  const [loaded, setLoaded] = useState(false);
  const { clipNews, setClipNews } = useClip();
  const onLoad = () => setLoaded(true);
  const addClip = useCallback(
    (news: Doc) => {
      let updatedClipNews: Doc[] = [];
      if (checkClip(clipNews, news._id)) {
        updatedClipNews = filterClip(clipNews, news._id);
      } else {
        updatedClipNews = [...clipNews, news];
      }

      setClipNews(updatedClipNews);
      setStoredClip(updatedClipNews);
    },
    [clipNews, setClipNews]
  );
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const imgElement = e.target as HTMLImageElement;
    imgElement.src = defaultImg;
  };
  return (
    <CardBox>
      <h1>{newsData.headline.main}</h1>
      <p>{newsData.abstract}</p>
      <ImgBox>
        <img
          src={
            newsData.multimedia.length > 0
              ? IMAGE_URL + newsData.multimedia[0].url
              : defaultImg
          }
          alt={
            newsData.multimedia.length > 0
              ? newsData.multimedia[0].crop_name
              : "Default Image"
          }
          onLoad={onLoad}
          onError={handleImgError}
        />
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
