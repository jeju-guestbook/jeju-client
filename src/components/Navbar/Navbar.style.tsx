import styled from "styled-components";

export const NavItem = styled.div`
  & input {
    display: none;
  }

  & label {
    font-family: "Pretendard-SemiBold";
    font-size: .8125rem;
    color : #6A7E8A;

    &.Checked {
        color: #004FFF;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  bottom: 0;

  width: 100vw;
  height: 3.25rem;

  border-top: #e3edf2 solid 1px;
`;
