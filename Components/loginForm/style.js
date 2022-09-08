import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--Co_secundary);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Form = styled.div`
    width: 300px;
    background-color: var(--Co_primary);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`;
export const Text = styled.h1`
    font-family: "Kaushan Script", cursive;
    color: var(--Co_text);
    font-size: 25px;
    margin: 0;
`;
export const Input = styled.input`
    margin-top: 20px;
    border: none;
    font-family: var(--Fo_primary);
    font-size: 35px;
    width: 100%;
    background-color: transparent;
    border-bottom: 3px solid var(--Co_text);
    box-sizing: border-box;
    color: var(--Co_secundary);
    :focus {
        background-color: transparent;
    }
`;
export const BtnArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 2px;
`;
export const Btn = styled.button`
    background-color: var(--Co_secundary);
    color: var(--Co_terciary);
    border: none;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px gray;
    font-size: 25px;

    :hover {
        background-color: var(--Co_terciary);
        color: var(--Co_secundary);
        box-sizing: border-box;
    }
`;
