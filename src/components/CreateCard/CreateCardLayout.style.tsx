import styled from "styled-components";

export const CreateCardContainer = styled.div`
  --defaultMargin: 3.4375rem;

  position: relative;

  width: 100%;
  height: 25.125rem;

  & svg {
    width: 24.625rem;
  }

  & img {
    position: absolute;

    background: lightgray 50%;

    border-radius: 5px;
    object-fit: cover;
  }

  & img:nth-of-type(1) {
    top: 1.25rem;
    left: calc(var(--defaultMargin) + 1.25rem);

    width: 15rem;
    height: 21.25rem;

    filter: blur(2px);
  }

  & img:nth-of-type(2) {
    top: 2.5rem;
    left: calc(var(--defaultMargin) + 2.5rem);

    width: 12.5rem;
    height: 18.75rem;
  }
`;
