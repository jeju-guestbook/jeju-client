import styled from 'styled-components';

export const AddPostLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3.75rem;

  opacity: 1;

  background-color: #6002ee;

  border-radius: 5px;
  border: 1px solid #6002ee;
  background: rgba(96, 2, 238, 0.1);

  color: #6002ee;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem;
  letter-spacing: -0.02813rem;
`;

export const AddPostInput = styled.input`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  opacity: 0;
`;
