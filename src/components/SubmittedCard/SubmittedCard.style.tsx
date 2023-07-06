import styled from "styled-components";

export const SubmittedFooter = styled.div`
  margin-block: 1.1875rem;

  font-family: "Pretendard-Medium";
  font-size: 1rem;
  line-height: 1.125rem;
  text-align: center;
`;

export const SubmittedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  max-width: 20.875rem;
  height: 40rem;

  padding: 0 1.0625rem;

  box-shadow: 0px 4px 6px 0px rgba(38, 16, 54, 0.3);
  border-radius: 5px;

  & img {
    width: 100%;
    height: 35rem;

    margin: 1.5rem 0 0 0;

    border-radius: 5px;
    object-fit: cover;
  }
`;