import styled from "styled-components";

export const HeaderIcon = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 1rem;
  left: 1.0831rem;

  font-family: "Pretendard-Bold";
  font-size: 1.125rem;
  text-align: center;
`;

export const HeaderText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.25rem;
  text-align: center;
`;

export const HeaderBody = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.0831rem;

  height: 3.5rem;

  background: #fff;

  border-bottom: #d0d8de solid 1px;

  .Logo {
    width: 5.4375rem;
    height: 2rem;
  }
`;
