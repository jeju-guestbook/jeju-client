import React from 'react';
import useKeywordSearchStore from '../../lib/hook/store/useKeywordSearchStore';
import usePostStore from '../../lib/hook/store/usePostStore';
import {
  LocationSearchButton,
  LocationSearchButtonWrapDiv,
  LocationSearchListDiv,
} from './LocationSearchList.style';
import SearchIconGray from '../icons/SearchIconGray';
import { useNavigate } from 'react-router-dom';

const LocationSearchList = () => {
  const { keywordSearchData } = useKeywordSearchStore();
  const { locationData } = usePostStore();
  return (
    <LocationSearchListDiv>
      {keywordSearchData?.documents.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </LocationSearchListDiv>
  );
};

interface ItemProps {
  item: DocumentData;
}

const Item = ({ item }: ItemProps) => {
  const { setLocationData } = usePostStore();
  const navigate = useNavigate();

  const onClick = () => {
    setLocationData({
      place_name: item.place_name,
      address_name: item.address_name,
      x: Number(item.x),
      y: Number(item.y),
    });

    navigate('/addpost');
  };

  return (
    <LocationSearchButtonWrapDiv>
      <SearchIconGray />
      <LocationSearchButton onClick={onClick}>
        <span className="PlaceName">{item.place_name}</span>
        {item.address_name}
      </LocationSearchButton>
    </LocationSearchButtonWrapDiv>
  );
};

export default LocationSearchList;
