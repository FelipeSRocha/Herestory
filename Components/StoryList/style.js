import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-bottom:65px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;

`;
export const SecondContainer = styled.div`
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 20px;
    width:300px;
    box-sizing: content-box; /* So the width will be 100% + 17px */

    @media only screen and (max-width: (max-width: var(--BS_Large))) {
        padding-right: 5px; /* Increase/decrease this value for cross-browser compatibility */
    }
`;
export const Head = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;
export const Header = styled.h2`
        font-family: "Kaushan Script", cursive;
        color:var(--Co_terciary);
        text-shadow: 2px 2px 2px var(--Co_shadow);
        font-size:30px;
        margin:0;
`
export const StoryBox = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    width:inherit;

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
    width:100%;

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
