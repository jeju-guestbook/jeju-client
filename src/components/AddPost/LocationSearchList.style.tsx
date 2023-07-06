import styled from 'styled-components';

export const LocationSearchListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationSearchButtonWrapDiv = styled.div`
  position: relative;

  width: 100%;

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

  text-align: left;
`;
