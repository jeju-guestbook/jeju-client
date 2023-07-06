import styled from 'styled-components';

export const AddPostInputWrapDiv = styled.div`
  padding: 0 1.5625rem;
  margin-top: 3.75rem;

  .LocationLabel {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }

  .LocationInput {
    width: 100%;
    height: 3.125rem;

    padding: 1rem 1rem 1rem 2.75rem;

    border-radius: 5px;
    border: 1px solid var(--4-fill-gray-ae-inactive, #aeaeae);
    background: var(--1-white-f-default, #fff);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
