
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    overflow: auto;
    box-sizing: border-box;
    @media only screen and (max-width: (max-width: var(--BS_Large))) {   
        padding: 2vw;
    }
`;
export const Wrapper = styled.div`
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    margin: 0;
    height: fit-content;

    border-radius: 5px;
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
    padding-left: 160px;
    @media only screen and (max-width: (max-width: var(--BS_Large))) {   
        padding-left: 12vw;
    }
    &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 140px;
        height: 100%;
        width: 1px;
        background: #db4034;
        @media only screen and (max-width: (max-width: var(--BS_Large))) {   
            left: 10vw;
    }
    }
    textarea {
        background: transparent;
        width: 90%;
        overflow: hidden;
        border: none;
        font-size: 50px;
        line-height: 60px;
        resize: none;
    }
    textarea:focus,
    input:focus {
        outline: none;
    }
`;
export const Content = styled.div`
    padding-top: 2px;
    padding-left: 150px;
    display: flex;
    min-height: 100%;
    background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px);
    margin: auto;
    background-size: 100% 30px;
    position: relative;
    min-height: 80vh;
    @media only screen and (max-width: (max-width: var(--BS_Large))) {   
        padding-left: 12vw;
    }
    &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 140px;
        height: 100%;
        width: 1px;
        background: #db4034;
        @media only screen and (max-width: (max-width: var(--BS_Large))) {   
            left: 10vw;
    }
    }
    textarea {
        background: transparent;
        width: 90%;
        overflow: hidden;
        border: none;
        font-size: 20px;
        line-height: 30px;
        resize: none;
    }
    textarea:focus,
    input:focus {
        outline: none;
    }
`;
export const Savediv = styled.div`
    position: fixed;
    top: 500px;
    left: 380px;
    .saved {
        background-color: white;
    }
    .unsaved {
        background-color: blue;
    }
`;