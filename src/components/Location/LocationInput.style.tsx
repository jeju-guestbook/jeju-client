import styled from 'styled-components';

export const LocationInputWrapDiv = styled.div`
  margin-top: 3.75rem;

  .LocationLabel {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.125rem;
  }

  .SearchIcon {
    position: absolute;

    margin: calc(0.75rem);
    margin-bottom: calc(0.75rem + 0.0625rem);
  }

  .LocationInput {
    width: 100%;
    height: 3.125rem;

    padding: 1rem 1rem 1rem 2.75rem;

    border: none;
    border-bottom: 1px solid var(--4-fill-gray-ae-inactive, #aeaeae);
    background: var(--1-white-f-default, #fff);
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */

    color: #6b6b6b;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: -0.0219rem;
  }
`;
