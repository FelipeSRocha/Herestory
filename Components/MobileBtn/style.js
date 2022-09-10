import styled from "styled-components";

export const Container = styled.div`

    z-index: 0;
    .Shrinked {
        width: 40px;
    }
    .Expand {
        width: 250px;
    }
    .TextShrinked {
        display: none;
    }
`;
export const Shrinker = styled.div`
    transition: 0.4s;

`;
export const btn = styled.div`
    position: relative;
    height: 40px;
    width: inherit;
    background-color: var(--Co_terciary);
    cursor: pointer;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--Co_text);
    gap: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 2px var(--Co_shadow);

`;
export const Icon = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    transform: translate(-50%, -50%);
    display:flex;
    align-items:center;
    justify-content:center;

`;
export const Text = styled.p`
    position: absolute;
    margin: 0;
    margin-left: 50px;
    left: 0;
    box-sizing: border-box;
    font-family: helvetica neue, helvetica, arial, sans-serif;
    min-width: 200px;
    font-size: 25px;

`;
