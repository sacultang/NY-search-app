import React, { useRef, useEffect, useMemo } from "react";
import SearchInput from "../../components/SearchInput";
import useSearchNews from "./hooks/useSearchNews";
import NewsCard from "../../components/NewsCard";
import styled from "styled-components";
const Home = () => {
  const { data, isLoading, setKeyword, keyword, fetchNextPage } =
    useSearchNews();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(keyword);
    const bottomWindow = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && keyword) {
          fetchNextPage();
        }
      },
      { threshold: 0.7 }
    );
    if (bottomRef.current) bottomWindow.observe(bottomRef.current);
  }, [keyword]);
  const searchResults = useMemo(() => {
    const results = data?.pages.flatMap((page) => page.response.docs);
    return results || null;
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <Container>
      <SearchInput setKeyword={setKeyword} />

      <CardContainer>
        {searchResults &&
          searchResults.map((item) => (
            <NewsCard key={item._id} newsData={item} />
          ))}
      </CardContainer>
      <ContainerBottom ref={bottomRef} />
    </Container>
  );
};

export default Home;

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
`;

const ContainerBottom = styled.div`
  height: 30px;
  width: 100%;
`;
