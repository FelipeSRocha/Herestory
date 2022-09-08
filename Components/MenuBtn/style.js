import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
        font-size: 25px;
        padding: 10px;
        padding-left: 20px;
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
        cursor:pointer;

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
