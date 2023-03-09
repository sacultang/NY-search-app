import React from "react";
import NewsCard from "../../components/NewsCard";
import styled from "styled-components";
import { useClip } from "../../context/useClipContext";
const ClipNews = () => {
  const { clipNews } = useClip();

  return (
    <Container>
      <CardContainer>
        {clipNews.length > 0
          ? clipNews?.map((news) => <NewsCard key={news._id} newsData={news} />)
          : null}
      </CardContainer>
    </Container>
  );
};

export default ClipNews;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-flow: row;
  grid-gap: 10px;
  max-width: 1100px;
`;
