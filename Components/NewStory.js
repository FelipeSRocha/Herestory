import { useState } from "react";
import styled from "styled-components";

export default function NewStory(props) {
    function onChangeTitle(event) {
        props.onchageTitle(event)
    }

    function onChangeText(event) {
        event.target.style.height = "inherit";
        event.target.style.height = `${event.target.scrollHeight}px`;
        props.onchangeText(event)

    }
    function updateTextArea(event) {
        console.log("test");
    }
    function save() {}
    return (
        <Container id="storyArea">
            <Wrapper id="boxStory">
                <Title id="title">
                    <input
                        placeholder="New Story"
                        onChange={onChangeTitle}
                        defaultValue={props.story.title}
                    />
                </Title>
                <Content id="text">
                    <textarea
                        onChange={onChangeText}
                        defaultValue={props.story.text}
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
    min-height: 100%;
    background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px);
    margin: auto;
    background-size: 100% 30px;
    position: relative;
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
    input {
        width: 100%;
        background: transparent;
        border: none;
        font-size: 50px;
        line-height: 60px;
        height: auto;
        margin: 0;
    }
    textarea:focus,
    input:focus {
        outline: none;
    }
`;
const Content = styled.div`
    padding-top: 13px;
    padding-left: 150px;
    textarea {
        background: transparent;
        margin: 0;
        width: 90%;
        height: inherit;
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
