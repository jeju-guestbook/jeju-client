import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  margin-top: 1.5rem;
`;

export const PostCardText = styled.div`
  min-width: 15rem;
  width: 100%;
  padding: 0 4.6875rem;

  font-size: 1.125rem;
  line-height: 1.875rem;
  letter-spacing: -0.0281rem;
`;

export const PostCardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.1875rem 0 0.75rem 0;

  font-size: 1.5rem;
  line-height: 2rem;
  color: #404040;

  & span:first-of-type {
    font-family: "Pretendard-Bold";
  }

  & span:nth-of-type(3) {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
