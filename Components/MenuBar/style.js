import styled from "styled-components";

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
    display:flex;
    @media only screen and (max-width: var(--BS_Large)) {
        display: none;
    }
    div {
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: var(--Fo_primary);
        font-size: 50px;
        display: flex;
    }
    h1 {
        font-family: "Kaushan Script", cursive;
        color: var(--Co_terciary);
        text-shadow: 2px 2px 2px var(--Co_shadow);
        font-size: 50px;
        margin: 0;
    }
`;

export const ToggleMenu = styled.div`
    position: relative;
    width: 100vw;
    height: 10vh;
    display: flex;
    gap: 20px;
    padding: 2vw;
    flex-direction: column;
    justify-items: center;
    box-sizing: border-box;
    z-index: 3;
    background: var(--Co_primary);
    transition: 0.5s;
`;
export const Arrow = styled.div`
    z-index: 3;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    right: 0;
    width: 100px;
    height: 50px;
    background: var(--Co_primary);

    display: none;

    p {
        margin: 0;
        font-size: 30px;
    }
    @media only screen and (max-width: var(--BS_Large)) {
        display: none;
    }
`;
