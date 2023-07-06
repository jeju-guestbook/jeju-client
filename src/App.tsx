import GuestbookAll from "./pages/GuestbookAll";
import { Route, Routes, useLocation } from "react-router-dom";
import AddPostLocationPage from "./pages/AddPostLocationPage";
import Header from "./components/Header/Header";
import AddPostPage from "./pages/AddPostPage";
// import Navbar from "./components/Navbar/Navbar";
import CreateCard from "./pages/CreateCard";
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
          <Route path="/createcard/:createcardId" element={<CreateCard />} />
        </Routes>
        {/* {showCommons(location.pathname) && <Navbar />} */}
      </div>
    </div>
  );
}

export default App;
