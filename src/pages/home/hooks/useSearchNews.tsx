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
  const { data, isFetching, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      [keyword],
      ({ pageParam = 1 }) => getSearchData(keyword, pageParam),
      {
        getNextPageParam: (response, currentPages) => {
          console.log(currentPages.length);
          const totalResults = response.response.meta.hits;
          const pageLength = Math.ceil(totalResults / 10);
          // console.log(pageLength);
          if (currentPages.length < pageLength) {
            return currentPages.length + 1;
          } else {
            return undefined;
          }
          // page < pageLength ? page + 1 : undefined;
          // console.log(page);
        },
        enabled: !!keyword,
      }
    );
  console.log(data);
  return (
    {
      data,
      isFetching,
      hasNextPage,
      setKeyword,
      keyword,
      fetchNextPage,
      isLoading,
    } || undefined
  );
};

export default useSearchNews;
