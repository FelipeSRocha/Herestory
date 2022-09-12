import styled from "styled-components";

export const Viewport = styled.div`
    height: 100vh;
    max-height: 100vh; /* fall-back */
    max-height: -moz-available;
    max-height: -webkit-fill-available;
    max-height: fill-available;
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    flex-wrap: nowrap;
    flex: 1;
    box-sizing: border-box;
`;
