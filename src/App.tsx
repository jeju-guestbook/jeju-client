import GuestbookAll from './pages/GuestbookAll';
import { Route, Routes } from 'react-router-dom';
import AddPostLocationPage from './pages/AddPostLocationPage';
import Header from './components/Header/Header';
import AddPostPage from './pages/AddPostPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div id="Wrapper">
      <div id="MainContainer">
        <Header />
        <Routes>
          <Route path="/guestbookall" element={<GuestbookAll />} />
          <Route
            path="/addpostlocation"
            element={<AddPostLocationPage />}
          ></Route>
          <Route path="/addpost" element={<AddPostPage />}></Route>
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
