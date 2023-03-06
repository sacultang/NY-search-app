import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import useSearchNews from "../home/hooks/useSearchNews";
const LayoutRoutes = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data } = useSearchNews(inputRef.current?.value!);
  return (
    <div>
      <Header inputRef={inputRef} />
      <Outlet context={data} />
    </div>
  );
};

export default LayoutRoutes;
