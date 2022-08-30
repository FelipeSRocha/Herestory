import styled from "styled-components";

export default function StoryList(props) {
    if(props.story.length>0){

    return props.story.map((element, index) => {
        const key = element.story_id;
        const title = element.title.substr(0, 25);
        const preview = element.text.substr(0, 100);
        function setStory(event) {
            props.selectStory(event);
        }
        function editStory(key) {
            props.edit(key);
        }
        function deleteStory(event, key) {
            props.delete(event, key);
        }
        return (
            <StoryBox key={"box" + key} id={index}>
                <ClickBox onClick={setStory}>
                    <Title key={"title" + key} id={index} onClick={setStory}>
                        Title: {title}
                    </Title>
                    <PreviewText
                        key={"preview" + key}
                        id={index}
                        onClick={setStory}
                    >
                        "{preview}..."
                    </PreviewText>
                </ClickBox>
                <button
                    className={props.selected == index ? "selected" : "none"}
                    onClick={() => editStory(key)}
                    key={"edit_" + key}
                    id={index}
                >
                    Edit Story
                </button>
                <button
                    className={props.selected == index ? "selected" : "none"}
                    onClick={() => deleteStory(key)}
                    key={"delete_" + key}
                    id={index}
                >
                    Delete Story
                </button>
            </StoryBox>
        );
    })}else{
        return(<h2>^ Create a New History!</h2>)
    }
    
    
}

const StoryBox = styled.div`
    z-index: 2;
    display: flex;
    gap: 5px;
    flex-direction: column;
    .none {
        display: none;
    }
`;
const ClickBox = styled.div``;
const Title = styled.h2`
    margin: 0;
    z-index: 1;
    font-size: 15px;
`;
const PreviewText = styled.p`
    margin: 0;
    z-index: 1;
    font-size: 12px;
`;
