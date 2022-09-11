import styled from "styled-components";

export const Storybar = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    overflow: auto;
    z-index: 1;
    background-color: var(--Co_primary);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
export const Title = styled.h1`
    font-family: "Kaushan Script", cursive;
    color: var(--Co_text);
    text-shadow: 1px 1px 1px var(--Co_shadow);
    font-size: 50px;
    margin: 20px;
`;
