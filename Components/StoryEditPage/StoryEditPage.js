import { useState, useEffect } from "react";
import * as S from './style'

export default function StoryEditPage(props) {
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
        setTitle(event.target.value);
        props.onchageTitle(event);
    }

    function onChangeText(event) {
        setText(event.target.value);
        props.onchangeText(event);
    }

    return (
            <S.Container id="storyArea">
                <S.Wrapper id="boxStory">
                    <S.Title id="title">
                        <textarea
                            id="titleArea"
                            onChange={onChangeTitle}
                            defaultValue={props.story.title}
                            rows={1}
                        />
                    </S.Title>
                    <S.Content id="text">
                        <textarea
                            id="textArea"
                            value={text}
                            onChange={onChangeText}
                        ></textarea>
                    </S.Content>
                </S.Wrapper>
            </S.Container>
    );
}

