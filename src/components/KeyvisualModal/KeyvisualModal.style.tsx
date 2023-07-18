import styled from 'styled-components';

export const KeyvisualModalDiv = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  background-color: #fff;
  background-image: url(/Jeju.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  animation: 0.7s ease-in-out 3s forwards fadeOut;
`;
