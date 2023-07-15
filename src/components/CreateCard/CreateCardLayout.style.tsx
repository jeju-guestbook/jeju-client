import styled from "styled-components";

export const CreateCardContainer = styled.div`
  /* --defaultMargin: 3.4375rem; */

  position: relative;

  height: 25.125rem;

  & svg {
    position: relative;
    /* left: 55px; */
    width: 17.75rem;
  }

  & img {
    position: absolute;

    background: lightgray 50%;

    border-radius: 5px;
    object-fit: cover;
  }

  & img:nth-of-type(1) {
    top: 1.375rem;
    /* left: calc(var(--defaultMargin) + 1.375rem); */
    left: 1.375rem;

    width: 15rem;
    height: 21.25rem;

    filter: blur(2px);
  }

  & img:nth-of-type(2) {
    top: 2.625rem;
    /* left: calc(var(--defaultMargin) + 2.625rem); */
    left: 2.625rem;

    width: 12.5rem;
    height: 18.75rem;
  }
`;
