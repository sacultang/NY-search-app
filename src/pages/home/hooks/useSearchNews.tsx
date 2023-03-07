import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Axios } from "../../../axiosInstance";
import { Docs } from "../../../types/shared";

const getSearchData = async (query: string, page: number): Promise<Docs> => {
  const { data } = await Axios({
    method: "get",
    params: {
      q: query,
      page,
      sort: "newest",
    },
  });

  return data;
};
const useSearchNews = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { data, isLoading, hasNextPage, fetchNextPage, isFetching } =
    useInfiniteQuery(
      [keyword],
      ({ pageParam = 1 }) => getSearchData(keyword, pageParam),
      {
        getNextPageParam: (response, currentPages) => {
          const totalResults = response.response.meta.hits;
          const pageLength = Math.ceil(totalResults / 10);
          if (currentPages.length < pageLength) {
            return currentPages.length + 1;
          } else {
            return undefined;
          }
        },
        enabled: !!keyword,
      }
    );

  return {
    data,
    hasNextPage,
    setKeyword,
    keyword,
    fetchNextPage,
    isLoading,
    isFetching,
  };
};

export default useSearchNews;
