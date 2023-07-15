import styled from 'styled-components';

export const LocationSearchListDiv = styled.div`
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  max-height: 16.2175rem;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const LocationSearchButtonWrapDiv = styled.div`
  position: relative;

  width: 100%;
  height: 2.8125rem;

  display: flex;
  align-items: center;

  .SearchIconGray {
    position: absolute;
    left: 0.625rem;
  }
`;

export const LocationSearchButton = styled.button`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0.44rem 2.19rem 0.25rem 2.75rem;

  background-color: #efe6fd;

  .PlaceName {
    color: #6c6c6c;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: -0.0187rem;
  }

  color: #6c6c6c;
  font-family: Pretendard;
  font-size: .75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: -0.0156rem;
`;
