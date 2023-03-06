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
  const { data, isFetching, hasNextPage } = useInfiniteQuery(
    ["news", keyword],
    ({ pageParam = 1 }) => getSearchData(keyword, pageParam),
    {
      getNextPageParam: (response, currentPages) => {
        return response.response.docs || undefined;
      },
    }
  );

  return { data, isFetching, hasNextPage, setKeyword } || undefined;
};

export default useSearchNews;
