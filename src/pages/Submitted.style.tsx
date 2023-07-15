import styled from "styled-components";

export const SubmittedBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;

  padding-top: 0.9375rem;

  & svg {
    margin-right: 0.8125rem;
  }
`;

export const SubmittedSubTitle = styled.div`
  width: 100%;
  margin: 1.5625rem 0 1.25rem 0;

  text-align: center;
  font-family: "Pretendard-Bold";
  font-size: 1.125rem;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.45px;
`;

export const SharingBtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;

  & * {
    width: 2.375rem;
    cursor: pointer;
  }
`;

export const SubmittedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: calc(100vh - 3.5rem);

  padding: 0 1.75rem;

  & div {
    position: relative;
    z-index: 3;
  }

  & #Submitted {
    top: 0;
  }
`;
