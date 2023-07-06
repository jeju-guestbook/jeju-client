import styled from "styled-components";

export const PostCardImg = styled.div`
  --imgWidth: calc(100vw - (var(--defaultMargin) + 1.25rem) * 2);
  
  position: absolute;
  z-index: 2;

  width: var(--imgWidth);

  & img {
    border-radius: 5px;
    
    background: lightgray 50%;

    object-fit: cover;
  }

  & img:nth-of-type(1) {
    z-index: 5;

    width: inherit;

    filter: blur(2px);
  }

  & img:nth-of-type(2) {
    width: calc(var(--imgWidth) - 1.25rem);
    z-index: 10;
  }
`;

export const PostCardContainer = styled.div`
  --defaultMargin: 3.4375rem;

  position: relative;

  width: 100%;
  height: 25.125rem;

  & img,
  & div {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & div:nth-of-type(1){
    top: 50%;
  }

  & div:nth-of-type(2){
    display: flex;
    justify-content: center;
    align-items: center;

    top: calc(50% + .25rem);
    width: calc(100vw - (var(--defaultMargin) * 2));
  }
`;
