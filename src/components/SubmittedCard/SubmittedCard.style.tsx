import styled from "styled-components";

export const SubmittedFooter = styled.div`
  margin-block: 0.875rem;

  font-family: "Pretendard-Medium";
  font-size: 1.125rem;
  line-height: 1.25rem;
  text-align: center;
  color: #111;
`;

export const SubmittedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  height: 75vh;
  max-width: 20.875rem;
  max-height: 31.25rem;

  padding: 1.0625rem 1.0625rem 0 1.0625rem;

  background-color: #fff;

  box-shadow: 0px 4px 6px 0px rgba(38, 16, 54, 0.3);
  border-radius: 5px;

  & img {
    width: 100%;
    height: 27.375rem;

    border-radius: 5px;
    object-fit: cover;
  }
`;
