import styled from 'styled-components';

export const PostContentDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 1.13rem;
  justify-content: center;
`;

export const PostImgLabel = styled.label<{ src?: string }>`
  width: 21.25rem;
  height: 21.25rem;

  opacity: 1;

  border: ${({ src }) => (src ? 'none' : '1px solid #D4CFD7')};
  border-radius: 0.3125rem;

  background-image: url(${({ src }) => (src ? src : '/AddPostIcon.svg')});
  background-size: ${({ src }) => (src ? 'cover' : '3rem 3rem')};
  background-repeat: no-repeat;
  background-position: center center;

  .PostImgInput {
    opacity: 0;
  }
`;

export const PostContentForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 1.13rem;

  .PostDateLabel {
    position: relative;
    display: flex;
    justify-content: flex-end;

    svg {
      position: absolute;
      width: 1.17663rem;
      height: 1.125rem;

      margin-top: 0.25rem;
      margin-right: 0.125rem;
      padding: calc(0.5rem - 0.25rem) calc(0.52rem - 0.125rem);

      box-sizing: content-box;

      background-color: #fff;
    }
  }

  .PostDatePicker {
    width: 21.375rem;
    height: 2.13rem;

    padding: 0.5rem 0.52rem;

    text-align: center;

    background-color: #fff;
    border-radius: 0.3125rem;
    border: 1px solid rgba(38, 16, 54, 0.2);
  }

  .PostTextArea {
    min-height: 17.5rem;

    padding: 0.86rem 0.98rem;

    border-radius: 0.3125rem;
    border: 1px solid rgba(38, 16, 54, 0.2);

    resize: none;

    color: #d9d9d9;
  }
`;
