import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoutes from "./pages/layout/LayoutRoutes";
import ClipNews from "./pages/ClipNews";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoutes />}>
          <Route index element={<Home />} />
          <Route path="/clip" element={<ClipNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
