import { css } from 'styled-components';

export const BackgroundImageCommon = css`
  position: relative;

  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const BackgroundImageAttr = css`
  ${BackgroundImageCommon}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
