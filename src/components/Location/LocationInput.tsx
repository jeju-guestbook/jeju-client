import React from 'react';
import { LocationInputWrapDiv } from './LocationInput.style';
import kakaoReq from '../../lib/requests/kakaoAPIRequest';
import useKeywordSearchStore from '../../lib/hook/store/useKeywordSearchStore';
import SearchIcon from '../icons/SearchIcon';

const LocationInput = () => {
  const [value, setValue] = React.useState('');
  const { setKeywordSearchData } = useKeywordSearchStore();

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!e.target.value) {
      setKeywordSearchData(undefined);
      return;
    }
    const result = await kakaoReq.localKeywordSearch(e.target.value);

    setKeywordSearchData(result.data);
  };

  return (
    <LocationInputWrapDiv>
      <label className="LocationLabel">
        <div>
          <span>어디를</span> <span>다녀오셨나요?</span>
          <img src="/Sori.png" alt="Sori" />
        </div>
        <SearchIcon />
        <input
          className="LocationInput"
          type="text"
          placeholder="다녀온 장소 입력하기"
          value={value}
          onChange={onChange}
        />
      </label>
    </LocationInputWrapDiv>
  );
};

export default LocationInput;
