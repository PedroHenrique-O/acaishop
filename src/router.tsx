import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hero } from "./components/Hero";
import { Shop } from "./components/Shop";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}
