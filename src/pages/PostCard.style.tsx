import styled from "styled-components";

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;

    margin-top: 1.875rem;
`

export const PostCardText = styled.div`
  width: 15rem;

  font-size: 1.125rem;
  line-height: 1.875rem;
  letter-spacing: -0.0281rem;
`;

export const PostCardTitle = styled.div`
  margin: 1.625rem 0 0.75rem 0;

  font-size: 1.125rem;
  line-height: 1.625rem;
  color: #404040;

  & span:first-of-type {
    font-family: "Pretendard-Bold";
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & svg {
    margin: 0 3.4375rem;
  }
`;
