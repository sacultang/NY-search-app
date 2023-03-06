import React from "react";

import { Docs } from "../../types/shared";
import { InfiniteData } from "@tanstack/react-query";
import SearchInput from "../../components/SearchInput";
import useSearchNews from "./hooks/useSearchNews";

const Home = () => {
  const { data, isFetching, setKeyword } = useSearchNews();

  return (
    <div>
      <SearchInput setKeyword={setKeyword} />
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        data?.pages[0].response.docs.map((item) => (
          <div key={item._id}>{item.abstract}</div>
        ))
      )}
    </div>
  );
};

export default Home;
