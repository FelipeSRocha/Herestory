import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 50px;
    padding: 50px;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const Box = styled.div`
    height: 40vw;
    width: 40vw;
    min-height: 150px;
    min-width: 150px;
    max-height: 400px;
    max-width: 400px;
    background: var(--Co_background);
    overflow: hidden;
    border-radius: 10px;
    -webkit-box-shadow: 3px 3px 3px var(--Co_shadow),
        0px 0px 6px var(--Co_shadow);
    -moz-box-shadow: 3px 3px 3px var(--Co_shadow), 0px 0px 6px var(--Co_shadow);
    -ms-box-shadow: 3px 3px 3px var(--Co_shadow), 0px 0px 6px var(--Co_shadow);
    -o-box-shadow: 3px 3px 3px var(--Co_shadow), 0px 0px 6px var(--Co_shadow);
    box-shadow: 3px 3px 3px var(--Co_shadow), 0px 0px 6px var(--Co_shadow);

    :hover {
        cursor: pointer;
    }
    @media only screen and (max-width: var(--BS_Large)) {
        width: 90vw;
        min-height: 400px;
        min-width: 0;
    }
`;
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--Co_secundary);
    color: var(--Co_text);
    :hover {
        background-color: var(--Co_terciary);
    }
    p {
        margin: 0;
    }
`;
export const Title = styled.div`
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    padding: 10px;
    border-bottom: 1px solid red;
    h1 {
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        font-size: 30px;
        line-height: 40px;
        height: auto;
        margin: 0;
        text-align: center;
        color: var(--Co_text);
    }
`;
export const Text = styled.div`
    padding: 0px 20px;
    font-family: helvetica neue, helvetica, arial, sans-serif;
    background: linear-gradient(
        to bottom,
        var(--Co_primary) 29px,
        var(--Co_terciary) 1px
    );
    margin: auto;
    margin-top: 10px;
    background-size: 100% 30px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 100%;
    overflow: hidden;
    text-align: justify;
    justify-content: center;
    p {
        background: transparent;
        margin: 0;
        width: 100%;
        border: none;
        font-size: 20px;
        line-height: 30px;
        resize: none;
    }
    div {
        height: 30px;
    }
`;
