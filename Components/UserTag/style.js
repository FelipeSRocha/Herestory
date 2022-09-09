import styled from "styled-components";

export const Container = styled.div`
    width: inherit;
    position: absolute;
    bottom: 0;
    border-top: 2px solid var(--Co_terciary);
    padding: 10px;
    display: flex;
    box-sizing: border-box;
`;
export const Name = styled.p`
    font-family: "Kaushan Script", cursive;
    color: var(--Co_terciary);
    text-shadow: 2px 2px 2px var(--Co_shadow);
    font-size: 30px;
    margin: 0;
    flex: 3;
`;
export const BtnContainer = styled.div`
    box-sizing: border-box;
    flex:1;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 5px;
    .selected {
        background-color: var(--Co_terciary);
        color: var(--Co_text);
        box-shadow: 2px 2px 2px var(--Co_shadow);
    }
    @media only screen and (max-width: var(--BS_Large)) {
        flex-direction: row;
    }
    button {
        font-family: helvetica neue, helvetica, arial, sans-serif;
        width: 100%;
        font-size: 20px;
        padding: 10px;
        background-color: transparent;
        color: var(--Co_text);
        border: none;
        display: flex;
        gap: 10%;
        align-items: center;
        border-radius: 15px;
        overflow: hidden;
        :hover {
            background-color: var(--Co_terciary);
            color: var(--Co_text);
            box-shadow: 2px 2px 2px var(--Co_shadow);
            cursor: pointer;
        }
        div {
            height: 10px;
            width: 10px;
            border-radius: 5px;
            background-color: var(--Co_text);
            flex: 1fr;
            :hover {
                background-color: var(--Co_background);
            }
        }
    }
`;
