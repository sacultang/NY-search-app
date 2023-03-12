import React, { useRef, useEffect, useMemo } from "react";
import SearchInput from "../../components/SearchInput";
import useSearchNews from "./hooks/useSearchNews";
import NewsCard from "../../components/NewsCard";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Skeleton from "../../components/Skeleton";
const Home = () => {
  const { data, setKeyword, keyword, fetchNextPage, isFetching } =
    useSearchNews();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bottomWindow = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !!keyword) {
          fetchNextPage();
        }
      },
      { threshold: 0.7 }
    );
    if (bottomRef.current) bottomWindow.observe(bottomRef.current);
  }, [keyword, fetchNextPage]);
  const searchResults = useMemo(() => {
    const results = data?.pages.flatMap((page) => page.response.docs);
    return results || null;
  }, [data]);

  return (
    <Container>
      <SearchInput setKeyword={setKeyword} />
      <CardContainer>
        {searchResults &&
          searchResults.map((news) => (
            <React.Fragment key={news._id}>
              {isFetching ? <Skeleton /> : <NewsCard newsData={news} />}
            </React.Fragment>
          ))}
      </CardContainer>
      {isFetching ? <Loader /> : null}
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
  max-width: 1100px;
`;

const ContainerBottom = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 30px;
`;
