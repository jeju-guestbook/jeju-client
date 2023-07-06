import GuestbookAll from './pages/GuestbookAll';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import AddPostLocation from './pages/AddPostLocation';

function App() {
  return (
    <div id="Wrapper">
      <div id="MainContainer">
        <Header />
        <Routes>
          <Route path="/guestbookall" element={<GuestbookAll />} />
          <Route path="/addpostlocation" element={<AddPostLocation />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
