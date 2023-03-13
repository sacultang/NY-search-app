import React, { useRef, useEffect, useMemo, useState } from "react";
import SearchInput from "../../components/SearchInput";
import useSearchNews from "./hooks/useSearchNews";
import NewsCard from "../../components/NewsCard";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { useInView } from "react-intersection-observer";
import { Doc } from "../../types/shared";
const Home = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Doc[] | null>(null);
  const { data, fetchNextPage, isFetching, isLoading } = useSearchNews(keyword);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (isLoading || !inView || !keyword) return;
    fetchNextPage();
  }, [isLoading, inView, fetchNextPage, keyword]);

  useEffect(() => {
    if (!data) return;
    setSearchResults(data.pages.flatMap((page) => page.response.docs));
  }, [data]);
  // useEffect(() => {
  //   if (isLoading) return;
  //   if (inView && !!keyword) fetchNextPage();
  // }, [keyword, fetchNextPage, inView, isLoading]);

  // const searchResults = useMemo(() => {
  //   const results = data?.pages.flatMap((page) => page.response.docs);
  //   return results || null;
  // }, [data]);

  return (
    <Container>
      <SearchInput setKeyword={setKeyword} />
      <CardContainer>
        {searchResults &&
          searchResults.map((news) => (
            <NewsCard newsData={news} key={news._id} />
          ))}
      </CardContainer>
      {isFetching ? <Loader /> : null}
      <ContainerBottom ref={ref} />
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
// useEffect(() => {
//   if (isLoading) return;
//   const bottomWindow = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting && !!keyword) {
//         fetchNextPage();
//       }
//     },
//     { threshold: 0.7 }
//   );
//   if (bottomRef.current) bottomWindow.observe(bottomRef.current);
// }, [keyword, fetchNextPage, isLoading]);
