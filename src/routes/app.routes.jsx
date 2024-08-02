import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MoviePreview } from "../pages/MoviePreview";
import { CreateMovie } from "../pages/CreateMovie";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:id" element={<MoviePreview />} />
      <Route path="/create-movie" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
