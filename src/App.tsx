import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
// import Navbar from "./components/Navbar/Navbar";
import showCommons from './lib/utils/showCommons';
import Loader from './components/Loader/Loader';
import LandingPopup from './components/LandingPopup/LandingPopup';
import React, { Suspense } from 'react';

const GuestbookAll = React.lazy(() => import('./pages/GuestbookAll'));
const Confirm = React.lazy(() => import('./pages/Confirm'));
const MapPage = React.lazy(() => import('./pages/MapPage'));
const Submitted = React.lazy(() => import('./pages/Submitted'));
const CreateCard = React.lazy(() => import('./pages/CreateCard'));
const AddPostPage = React.lazy(() => import('./pages/AddPostPage'));
const AddPostLocationPage = React.lazy(
  () => import('./pages/AddPostLocationPage')
);

function App() {
  const location = useLocation();

  return (
    <div id="Wrapper">
      <div id="MainContainer">
        {showCommons(location.pathname) && <Header />}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <MapPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/guestbookall"
            element={
              <Suspense fallback={<></>}>
                <GuestbookAll />
              </Suspense>
            }
          />
          <Route
            path="/addpostlocation"
            element={
              <Suspense fallback={<></>}>
                <AddPostLocationPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/addpost"
            element={
              <Suspense fallback={<></>}>
                <AddPostPage />
              </Suspense>
            }
          />
          <Route
            path="/createcard/:createcardId"
            element={
              <Suspense fallback={<></>}>
                <CreateCard />
              </Suspense>
            }
          />
          <Route
            path="/submitted/:submittedId"
            element={
              <Suspense fallback={<></>}>
                <Submitted />
              </Suspense>
            }
          />
          <Route
            path="/confirm"
            element={
              <Suspense fallback={<></>}>
                <Confirm />
              </Suspense>
            }
          />
        </Routes>
        {/* {showCommons(location.pathname) && <Navbar />} */}
        <Loader />
        <LandingPopup />
      </div>
    </div>
  );
}

export default App;
