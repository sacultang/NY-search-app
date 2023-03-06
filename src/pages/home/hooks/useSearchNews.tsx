import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { Axios } from "../../../axiosInstance";

const getSearchData = async (query: string) => {
  const { data } = await Axios({
    method: "get",
    params: {
      q: query,
      sort: "newest",
    },
  });
  return data;
};
const useSearchNews = (query: string) => {
  const { data } = useInfiniteQuery(["news"], () => getSearchData(query));

  return { data };
};

export default useSearchNews;
