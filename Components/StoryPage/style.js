import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    overflow: auto;
    box-sizing: border-box;
    @media only screen and (max-width: 1000px) {
        padding: 0;
    }
`;
export const Wrapper = styled.div`
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2), 0px 0px 6px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.div`
    background: #fff6e7;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    padding-left: 120px;
    text-shadow: 1px 1px 1px var(--Co_shadow);
    color: var(--Co_text);
    font-family: "Kaushan Script", cursive;
    font-weight: 200;
    font-weight: 200;
    margin: 0;
    height: fit-content;
    min-height: 100%;
    margin: auto;
    background-size: 100% 30px;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    @media only screen and (max-width: 1000px) {
        padding-left: 6vw;
    }
    &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 100px;
        height: 100%;
        width: 1px;
        background: #db4034;
        @media only screen and (max-width: 1000px) {
            left: 5vw;
        }
    }

    h1 {
        padding: 10px 0px;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        font-size: 50px;
        line-height: 60px;
        height: auto;
        margin: 0;
        overflow: hidden;
    }
`;
export const Content = styled.div`
    padding-top: 5px;
    padding-left: 120px;
    min-height: 80vh;
    font-family: "Roboto Slab";
    color: var(--Co_text);

    font-weight: 200;
    margin: 0;
    height: fit-content;
    background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px);
    margin: auto;
    background-size: 100% 30px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    @media only screen and (max-width: 1000px) {
        padding-left: 6vw;
    }
    p {
        background: transparent;
        margin: 0;
        width: 90%;
        border: none;
        font-size: 20px;
        line-height: 30px;
        resize: none;
        color: var(--Co_text);
        font-family: helvetica neue, helvetica, arial, sans-serif;
    }
    div {
        height: 30px;
    }

    &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 100px;
        height: 100%;
        width: 1px;
        background: #db4034;
        @media only screen and (max-width: 1000px) {
            left: 5vw;
        }
    }
`;
