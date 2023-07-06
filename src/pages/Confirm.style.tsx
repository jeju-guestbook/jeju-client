import styled from "styled-components";

export const ConfirmText = styled.div`
  text-align: center;
`;

export const ConfirmTitle = styled.div`
  margin-bottom: 1.375rem;

  color: #6002EE;
  font-family: 'Pretendard-SemiBold';
  font-size: 1.75rem;
  text-align: center;
`;

export const ConfirmContent = styled.div`
  position: relative;
  z-index: 3;

  margin-top: 5.125rem;
`;

export const ConfirmContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  & #Confirm {
    top: -2.75rem;
  }
`;
