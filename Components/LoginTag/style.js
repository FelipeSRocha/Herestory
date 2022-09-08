import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top: 2px solid var(--Co_terciary);
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    div {
        display: flex;
        width: 100%;
        h2 {
            flex: 3;
            font-family: "Kaushan Script", cursive;
            color: var(--Co_terciary);
            text-shadow: 2px 2px 2px var(--Co_shadow);
            font-size: 25px;
            margin: 0;
        }
        div {
            flex: 1;
        }
    }
`;
export const Name = styled.p``;
