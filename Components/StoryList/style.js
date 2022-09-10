import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-bottom: 65px;
    overflow: hidden;
    height:100%;
    display: flex;
    justify-content: flex-start;
`;
export const SecondContainer = styled.div`
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    height: inherit;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 20px;
    width: 300px;
    box-sizing: content-box; /* So the width will be 100% + 17px */

    @media only screen and (max-width: (max-width: var(--BS_Large))) {
        padding-right: 5px; /* Increase/decrease this value for cross-browser compatibility */
    }
`;
export const Head = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const Header = styled.h2`
    font-family: "Kaushan Script", cursive;
    color: var(--Co_terciary);
    text-shadow: 2px 2px 2px var(--Co_shadow);
    font-size: 30px;
    margin: 0;
`;
export const StoryBox = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: inherit;

    .none {
        display: none;
    }
`;
export const ClickBox = styled.div`
background-color:var(--Co_paper);
border-radius:15px;
height:10vh;
width:90%;
box-sizing:content-box;
`;
export const ClickBoxLeft = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ClickBoxRigth = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.h2`
    height: 100%;
    margin: 0;
    z-index: 1;
    font-size: 10px;
`;
export const PreviewText = styled.p`
    height: 100%;

    margin: 0;
    z-index: 1;
    font-size: 10px;
`;
