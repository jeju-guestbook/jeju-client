import styled from "styled-components";

export const LocationInputWrapDiv = styled.div`
  margin-top: 3.75rem;

  .LocationLabel {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.25rem;

    font-size: 1.5rem;

    & div:nth-of-type(1) {
      display: inline-block;

      & span:nth-of-type(1) {
        font-family: "Pretendard-Bold";
      }

      & span:nth-of-type(2) {
        font-family: "Pretendard-Regular";
      }
    }
  }

  .SearchIcon {
    position: absolute;

    margin: 1.125rem 1.125rem 1rem 1.125rem;
  }
  
  .LocationInput {
    width: 100%;
    height: 3.125rem;

    padding: 1.5rem 1.125rem 1.5rem 3.75rem;

    border: none;
    border-bottom: 1px solid var(--4-fill-gray-ae-inactive, #aeaeae);
    background: var(--1-white-f-default, #fff);
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */

    color: #6b6b6b;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: -0.0219rem;
  }
`;
