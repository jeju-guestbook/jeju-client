import React, { useEffect, useId } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import initValue from '../../lib/const/initValue';
import dummyMarkers from './MockUpLocation';
import listShuffle from '../../lib/utils/listShuffle';
import { useNavigate } from 'react-router-dom';
import useLoaderStore from '../../lib/hook/store/useLoaderStore';

export let kakaoUseMap: kakao.maps.Map;

const KakaoMap = () => {
  // const { setIsLoading } = useLoaderStore();
  return (
    <Map
      center={{
        lat: initValue.mapCenter.lat,
        lng: initValue.mapCenter.lng,
      }}
      style={{
        width: '100vw',
        height: '62.7962vh',
      }}
      level={initValue.mapLevel}
    >
      <KakaoMap.List />
    </Map>
  );
};

const List = () => {
  const shuffled = listShuffle(dummyMarkers).slice(0, 12);
  return (
    <>
      {shuffled.map((poiData, idx) => {
        return (
          <KakaoMap.Item key={poiData.lat} poiData={poiData}></KakaoMap.Item>
        );
      })}
    </>
  );
};

interface ItemProps {
  poiData: {
    lat: number;
    lng: number;
  };
}

const Item = ({ poiData }: ItemProps) => {
  const navigate = useNavigate();

  const image = {
    src: '/Marker.svg',
    size: {
      width: 30,
      height: 40,
    },
  };

  return (
    <MapMarker
      position={{
        lat: poiData.lat,
        lng: poiData.lng,
      }}
      image={image}
      onClick={() => {
        navigate('/guestbookall');
      }}
    />
  );
};

KakaoMap.List = List;
KakaoMap.Item = Item;

export default KakaoMap;
