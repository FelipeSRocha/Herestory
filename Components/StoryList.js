import styled from "styled-components";

export default function StoryList(props) {
    return props.story.map((element, index) => {
        const key = element.story_id;
        const title = element.title.substr(0, 25);
        const preview = element.text.substr(0, 100);
        function setStory(event){
            props.selectStory(event)
        }
        function editStory(event,key){
            props.edit(event,key)
        }
        return (
            <StoryBox key={"box"+key} id={index} >
                <Title key={"title" + key} id={index} onClick={setStory}>
                    Title: {title}
                </Title>
                <PreviewText key={"preview" + key} id={index} onClick={setStory}>
                    "{preview}..."
                </PreviewText>
                <button
                    className={props.selected == index ? "selected" : "none"}
                    onClick={(event)=>editStory(event,key)}
                    key={key} id={index} 
                >
                    Edit Story
                </button>
            </StoryBox>
        );
    });
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
