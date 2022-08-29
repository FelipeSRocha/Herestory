import { useState } from "react";
import styled from "styled-components";

export default function NewStory(props) {
    const arrayOfText = props.story.text.split('\n');

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
        <Container id="storyArea">
            <Wrapper id="boxStory">
                <Title id="title">
                    <h1 onChange={onChangeTitle}>{props.story.title}</h1>
                </Title>
                <Content id="text">
                    {arrayOfText.map((element,index) =>{
 
                        return(element==""?(<div key={index}/>):(<p key={index}>{element}</p>))
                    })}
                </Content>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    width:100%;
    height:100%;
    padding:50px;
    overflow:auto;
    box-sizing: border-box;
`
const Wrapper = styled.div`

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
    padding-left: 120px;
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    margin: 0;
    height: fit-content;
    min-height:100%;
    /* background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px); */
    margin: auto;
    background-size: 100% 30px;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    
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
    }
    
    h1 {
        padding: 10px 0px;
        width: 100%;
        max-width:100%;
        background: transparent;
        border: none;
        font-size: 50px;
        line-height: 60px;
        height: auto;
        margin: 0;
        overflow: hidden;
    }

`;
const Content = styled.div`
    padding-top: 5px;
    padding-left: 120px;
    min-height:80vh;
    p {
        background: transparent;
        margin: 0;
        width: 90%;
        border: none;
        font-size: 20px;
        line-height: 30px;
        resize: none;
    }
    div {
        height: 30px;
    }
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    margin: 0;
    height: fit-content;
    background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px);
    margin: auto;
    background-size: 100% 30px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

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
    }
`;
