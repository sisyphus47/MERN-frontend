import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*User Layout */}
        </Route>
        <Route>{/*Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
}
