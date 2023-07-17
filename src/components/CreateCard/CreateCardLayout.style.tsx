import styled from 'styled-components';

export const CreateCardContainer = styled.div`
  position: relative;

  height: 24rem;

  & svg {
    position: relative;
    width: 17.75rem;
  }

  .PostCardImg {
    position: absolute;

    top: 1.375rem;
    left: 1.375rem;

    background: lightgray 50%;

    border-radius: 5px;
    object-fit: cover;

    width: 15rem;
    height: 21.25rem;
  }
`;
