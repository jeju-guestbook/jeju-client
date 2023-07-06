import styled from "styled-components";

export const Container = styled.div`
  --Header : 3.5rem;
  --Navbar : 3.25rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;

  width: 100%;
  height: calc(100vh - 3.5rem);
  overflow: auto;
  padding: 0.625rem 0.875rem;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
