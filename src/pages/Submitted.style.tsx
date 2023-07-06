import styled from "styled-components";

export const SharingBtnGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 19px;

    margin-top: 2.3125rem;

    & *{
        width: 2.125rem;
        cursor: pointer;
    }
`

export const SubmittedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    padding: 0 1.75rem;
`