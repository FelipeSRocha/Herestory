import { useState } from "react";
import styled from "styled-components";

export default function NewStory() {
    const [title, setTitle] = useState("New Story");
    const [text, setText] = useState("");
    const [savedState, setSavedState] = useState(true);

    function onChangeTitle(event) {
        setSavedState(false);
        setTitle(event.target.value);
    }

    function onChangeText(event) {
        event.target.style.height = "inherit";
        event.target.style.height = `${event.target.scrollHeight}px`;
        setSavedState(false);
        setText(event.target.value);
    }
    function save() {
        setSavedState(true);
        console.log(title);
        console.log(text);
    }
    return (
        <Wrapper id="boxStory">

            <Title id="title">
                <input placeholder="New Story" onChange={onChangeTitle} />
            </Title>
            <Content id="text">
                <textarea onChange={onChangeText} />
            </Content>
            <Savediv>
                <button
                    onClick={save}
                    className={savedState ? "saved" : "unsaved"}
                >
                    Save
                </button>
            </Savediv>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    margin: 0;
    width: 80vw;
    height: auto;
    min-height: 400px;
    background: linear-gradient(to bottom, white 29px, #00b0d7 1px);
    margin: 50px auto;
    background-size: 100% 30px;
    position: relative;
    overflow: hidden;
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
    }
`;
const Title = styled.div`
    height: 130px;
    background: white;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    padding-left: 160px;
    input {
        width: 100%;
        background: transparent;
        border: none;
        font-size: 50px;
        line-height: 60px;
        height: auto;
    }
    textarea:focus,
    input:focus {
        outline: none;
    }
`;
const Content = styled.div`
    margin-top: 20px;
    padding-left: 150px;
    textarea {
        background: transparent;
        margin: 0;
        width: 90%;
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
const Savediv = styled.div`
    position: sticky;
    top: 20px;
    left: 0;
    .saved {
        background-color: white;
    }
    .unsaved {
        background-color: blue;
    }
`;
