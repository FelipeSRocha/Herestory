import { useState } from "react";
import styled from "styled-components";

export default function NewStory() {
    const [title, setTitle] = useState("New Story");
    const [text, setText] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas fringilla turpis id sodales. Suspendisse vestibulum orci velit, vitae ultrices nulla dignissim nec. Morbi vitae mi sed mi tristique sagittis. Aenean id risus et enim laoreet placerat. Aliquam vestibulum erat at enim gravida auctor. Curabitur consequat felis eget nunc dictum tristique. Proin a dolor aliquam, sagittis lorem a, tincidunt velit."
    );
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
    return (
        <Wrapper id="boxStory">
            <Title id="title">
                <h1>{title}</h1>
            </Title>
            <Content id="text">
                <p>{text}</p>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    margin: 0;
    width: 80%;
    height: auto;
    min-height: 400px;
    background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px);
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
    height: 80px;
    background: #fff6e7;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    padding-left: 160px;
    h1 {
        width: 100%;
        background: transparent;
        border: none;
        font-size: 50px;
        line-height: 60px;
        height: auto;
        margin: 0;
    }
`;
const Content = styled.div`
    padding-top: 13px;
    padding-left: 150px;
    p {
        background: transparent;
        margin: 0;
        width: 90%;
        border: none;
        font-size: 20px;
        line-height: 30px;
        resize: none;
    }
`;