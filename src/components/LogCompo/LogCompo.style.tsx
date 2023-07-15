import styled from "styled-components";

export const LogText = styled.div`
  & div:nth-of-type(1) {
    margin-bottom: 0.375rem;

    font-family: "Pretendard-Medium";
    font-size: 1.125rem;
    color: #6c7278;
  }
  
  & div:nth-of-type(2) {
    font-size: 1.25rem;
  }
`;

export const LogContainer = styled.div`
    width: calc(50% - .4375rem);
    margin-bottom: .75rem;

    & img {
        width: 100%;
        height: 15.4375rem;
        margin-bottom: .625rem;
        
        border-radius: .3125rem;
        object-fit: cover;
    }
`;
