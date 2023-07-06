import styled from 'styled-components';

export const AddPostLabel = styled.label`
  position: fixed;
  z-index: 9999;
  bottom: 0.9375rem;
  right: 0.875rem;

  width: 3rem;
  height: 3rem;

  background-image: url(/AddPostIcon.svg);
  border-radius: 50%;

  opacity: 1;
`;

export const AddPostInput = styled.input`
  width: 3rem;
  height: 3rem;

  opacity: 0;
`;
