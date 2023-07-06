import React from "react";
import KakaoMap from "../components/KakaoMap/KakaoMap";
import { MapPageDiv, MapPageBottom } from "./MapPage.style";
import SubHeader from "../components/Header/SubHeader";
// import SubFooter from '../components/Footer/SubFooter';
import BottomBtn from "../components/BottomBtn/BottomBtn";
import { BtnProps } from "../types/BtnProps";
import { useNavigate } from "react-router-dom";

const MapPage = () => {
  const navigate = useNavigate();

  const goGuestbook: BtnProps = {
    content: "방명록 작성하기",
    handler: () => {
      navigate('/addpostlocation')
    },
  };

  return (
    <MapPageDiv>
      <SubHeader />
      <KakaoMap />
      <MapPageBottom>
        <BottomBtn {...goGuestbook} />
      </MapPageBottom>
    </MapPageDiv>
  );
};

export default MapPage;
