import styled from "styled-components";

export const Container = styled.div`
    @media only screen and (max-width: 1000px) {
    width: 0;

        .open {
        }
        .closed {
            transform: translateX(-100vw);
        }
    }
`;
export const Menubar = styled.div`
    z-index: 3;
    width: 300px;
    min-width: 300px;
    position: relative;
    background: var(--Co_secundary);
    height: 100vh;
    padding: 0px 20px;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    display: flex;

    @media only screen and (max-width: 1000px) {
        width: 100vw;
        transition: 0.2s;
    }
    div {
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: var(--Fo_primary);
        font-size: 25px;
        display: flex;
    }
    h1 {
        font-family: "Kaushan Script", cursive;
        color: var(--Co_terciary);
        text-shadow: 2px 2px 2px var(--Co_shadow);
        font-size: 50px;
        margin: 0;
    }
    .open {
        left: 0;
    }
    .closed {
        position: absolute;
        right: 0;
        transform: translateX(100%);
    }
`;


export const Arrow = styled.div`
    z-index: 3;
    position: absolute;
    bottom: 66px;
    width: 50px;
    height: 66px;
    background-color: var(--Co_terciary);
    color: var(--Co_text);
    box-sizing: border-box;
    border-top: 2px solid var(--Co_terciary);
    p {
        margin: 0;
        font-size: 30px;
    }
    @media only screen and (min-width: 1000px) {
        background-color:black;
        display:none !important;

    }
`;

export const PageUser = styled.p`
    font-family: "Kaushan Script", cursive;
    color: var(--Co_terciary);
    text-shadow: 2px 2px 2px var(--Co_shadow);
    font-size: 30px;
    margin: 0;
`;