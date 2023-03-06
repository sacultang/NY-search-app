import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoutes from "./pages/layout/LayoutRoutes";
import ClipNews from "./pages/clipnews/ClipNews";
import Home from "./pages/home/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query/queryClient";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutRoutes />}>
            <Route index element={<Home />} />
            <Route path="/clip" element={<ClipNews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
