import styled from "styled-components";

export const SharingBtnGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 19px;

    margin-top: 2.3125rem;

    & * {
        width: 3rem;
        cursor: pointer;
    }
`

export const SubmittedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: calc(100vh - 3.5rem);

    padding: 0 1.75rem;

    & div {
        position: relative;
        z-index: 3;
    }

    & #Submitted {
        top: 0;
    }
`