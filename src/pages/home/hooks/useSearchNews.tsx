import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { Axios } from "../../../axiosInstance";

const getSearchData = async (query: string, page: number) => {
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
        console.log(currentPages, "currentpage");
        console.log(response, "response");
        return response.docs || undefined;
      },
    }
  );
  console.log(data?.pages[0].response.docs);
  return { data };
};

export default useSearchNews;
