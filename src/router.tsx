import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";

import { HomePage } from "./pages/HomePage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
