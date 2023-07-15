import styled from "styled-components";

export const ConfirmBottom = styled.div`
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

export const ConfirmText = styled.div`
  margin-bottom: 6.375rem;

  text-align: center;
`;

export const ConfirmTitle = styled.div`
  margin-bottom: 1.375rem;

  color: #6002ee;
  font-family: "Pretendard-SemiBold";
  font-size: 1.75rem;
  text-align: center;
`;

export const ConfirmContent = styled.div`
  position: relative;
  top: -10.75rem;
  z-index: 3;

  width: 100vw;
  height: calc(100vh - 5.125rem);
  margin-top: 5.125rem;

  text-align: center;

  & img {
    width: 100%;
  }
`;

export const ConfirmContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  & #Confirm {
    top: -2.75rem;
  }
`;
