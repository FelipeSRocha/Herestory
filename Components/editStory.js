import { useState, useEffect } from "react";
import styled from "styled-components";

export default function NewStory(props) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        setText(props.story.text);
    }, []);
    useEffect(() => {
        setTitle(props.story.title);
    }, []);

    useEffect(() => {
        const textArea = document.getElementById("textArea");
        textArea.style.height = "inherit";
        textArea.style.height = `${textArea.scrollHeight}px`;
    }, [text]);
    useEffect(() => {
        const titleArea = document.getElementById("titleArea");
        titleArea.style.height = "inherit";
        titleArea.style.height = `${titleArea.scrollHeight}px`;
    }, [title]);

    function onChangeTitle(event) {
        setTitle(event.target.value)
        props.onchageTitle(event);

    }

    function onChangeText(event) {
        setText(event.target.value);
        props.onchangeText(event);
    }

    return (
        <Container id="storyArea">
            <Wrapper id="boxStory">
                <Title id="title">
                    <textarea
                        id="titleArea"
                        onChange={onChangeTitle}
                        defaultValue={props.story.title}
                        rows={1}
                    />
                </Title>
                <Content id="text">
                    <textarea
                        id="textArea"
                        value={text}
                        onChange={onChangeText}
                    ></textarea>
                </Content>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    overflow: auto;
    box-sizing: border-box;
`;
const Wrapper = styled.div`
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
const Title = styled.div`
    background: #fff6e7;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    padding-left: 160px;
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
const Content = styled.div`
    padding-top: 2px;
    padding-left: 150px;
    display: flex;
    min-height: 100%;
    background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px);
    margin: auto;
    background-size: 100% 30px;
    position: relative;
    min-height: 80vh;

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
const Savediv = styled.div`
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
