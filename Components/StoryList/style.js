import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
`;
export const SecondContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    overflow-x: hidden;
    width: 200%;
    overflow-y: scroll;
    padding-right: 20px; /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: border-box; /* So the width will be 100% + 17px */
    @media only screen and (max-width: (max-width: var(--BS_Large))) {
        padding-right: 5px; /* Increase/decrease this value for cross-browser compatibility */
    }
`;
export const Head = styled.div`
    margin-bottom: 40px;
    h1 {
        font-family: helvetica neue, helvetica, arial, sans-serif;
        font-size: 25px;
        text-align: center;
    }
`;
export const StoryBox = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    .none {
        display: none;
    }
`;
export const ClickBox = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    height: 130px;
    background-color: var(--Co_primary);
    box-sizing: border-box;
    border-radius: 15px;
    overflow: hidden;
    :hover {
        background-color: var(--Co_secundary);
        color: var(--Co_primary);
    }
    @media only screen and (max-width: (max-width: var(--BS_Large))) {
        width: 100%;
        min-height: 75px;
    }
`;
export const ClickBoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;
export const ClickBoxRigth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
        background-color: var(--Co_secundary);
        border: none;
        height: 50%;
        width: 100%;
        color: var(--Co_primary);
        :hover {
            background-color: black;
        }
    }
`;
export const Title = styled.h2`
    height: 100%;
    margin: 0;
    z-index: 1;
    font-size: 20px;
`;
export const PreviewText = styled.p`
    height: 100%;

    margin: 0;
    z-index: 1;
    font-size: 15px;
`;
