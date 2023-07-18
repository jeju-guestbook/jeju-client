import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;
  padding-top: 1.375rem;

  .ContentWrap {
    position: relative;
    z-index: 3;

    margin-bottom: 1.875rem;
  }

  & #CardFrame {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 24rem;
  }

  #CreateCard {
    top: -10.5rem;

    transform: scaleX(-1);
  }
`;

export const CardBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;

  height: fit-content;
  margin: 2.1875rem 0 1.5rem 0;

  & svg {
    margin-right: 0.8125rem;
  }

  & div {
    position: relative;
    bottom: 0;

    &:nth-child(1) path {
      stroke: rgba(96, 2, 238, 1);
    }
  }
`;

export const CardSubTitle = styled.div`
  width: 100%;
  margin: 1.5625rem 0 1.25rem 0;

  text-align: center;
  font-family: 'Pretendard-Bold';
  font-size: 1.125rem;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.45px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;

  margin-top: 1.5rem;
`;

export const CreateCardText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;

  box-sizing: content-box;

  width: 100%;
  min-width: 15rem;
  max-width: 15rem;

  margin: 0 auto;
  padding: 0 4.6875rem;

  font-size: 1.125rem;
  line-height: 1.875rem;
  letter-spacing: -0.0281rem;
`;

export const CreateCardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.9375rem 0 1.125rem 0;

  font-size: 1.5rem;
  line-height: 2rem;
  color: #404040;

  & span:first-of-type {
    font-family: 'Pretendard-Bold';
  }

  & span:nth-of-type(3) {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;
