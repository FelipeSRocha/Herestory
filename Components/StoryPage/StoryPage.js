import * as S from './style'

export default function StoryPage(props) {
    const arrayOfText = props.story.text.split("\n");

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
        <>
            <S.Container id="storyArea">
                <S.Wrapper id="boxStory">
                    <S.Title id="title">
                        <h1 onChange={onChangeTitle}>{props.story.title}</h1>
                    </S.Title>
                    <S.Content id="text">
                        {arrayOfText.map((element, index) => {
                            return element == "" ? (
                                <div key={index} />
                            ) : (
                                <p key={index}>{element}</p>
                            );
                        })}
                    </S.Content>
                </S.Wrapper>
            </S.Container>
        </>
    );
}
