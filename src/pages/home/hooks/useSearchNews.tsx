import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
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
const useSearchNews = (query: string) => {
  const { data } = useInfiniteQuery(
    ["news"],
    ({ pageParam = 115 }) => getSearchData(query, pageParam),
    {
      getNextPageParam: (response, currentPages) => {
        return response.docs || undefined;
      },
    }
  );

  return { data };
};

export default useSearchNews;
