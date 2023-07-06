import GuestbookAll from "./pages/GuestbookAll";
import { Route, Routes, useLocation } from "react-router-dom";
import AddPostLocationPage from "./pages/AddPostLocationPage";
import Header from "./components/Header/Header";
import AddPostPage from "./pages/AddPostPage";
import Navbar from "./components/Navbar/Navbar";
import PostCard from "./pages/PostCard";
import showCommons from "./lib/utils/showCommons";

function App() {
  const location = useLocation();

  return (
    <div id="Wrapper">
      <div id="MainContainer">
        {showCommons(location.pathname) && <Header />}
        <Routes>
          <Route path="/guestbookall" element={<GuestbookAll />} />
          <Route
            path="/addpostlocation"
            element={<AddPostLocationPage />}
          ></Route>
          <Route path="/addpost" element={<AddPostPage />} />
          <Route path="/postcard/:postcardId" element={<PostCard />} />
        </Routes>
        {showCommons(location.pathname) && <Navbar />}
      </div>
    </div>
  );
}

export default App;
