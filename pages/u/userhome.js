import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import NewStory from "../../Components/NewStory";
import styled from "styled-components";

export default function userPage(data) {
    const [story, setStory] = useState(data.story.story_list[0]);
    const router = useRouter();
    const user = data.user.user.name;
    const stories = data.story.story_list;

    function onchageTitle() {}
    function onchangeText() {}

    function StoryContainer(props) {
        const id = props.data.story_id;
        const preview = props.data.text.substr(0, 100);
        return (
            <StoryBox key={id} id={id}>
                <Title key={"title:" + id} id={"title:" + id}>
                    Title:
                </Title>
                <PreviewText key={"preview:" + id} id={"preview:" + id}>
                    "{preview}..."
                </PreviewText>
            </StoryBox>
        );
    }
    return (
        <Container id="container">
            <Menu id="menubar">
                <h1>{user}</h1>
                <StoryList>
                    {stories.map((item) => {
                        return <StoryContainer data={item} />;
                    })}
                </StoryList>
            </Menu>
            <NewStory
                id="storyview"
                data={story}
                onchageTitle={onchageTitle}
                onchangeText={onchangeText}
            >
                {" "}
            </NewStory>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
`;
const Menu = styled.div`
    background: #fee6c8;
    width: 300px;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
    border: 2px black solid;
    overflow: hidden;
`;
const StoryList = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    overflow: auto;
    box-sizing: border-box;
`;

const StoryBox = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`;
const Title = styled.h2`
    margin: 0;
`;
const PreviewText = styled.p`
    margin: 0;
`;
export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination:
                    "/api/auth/signin?callbackUrl=" +
                    process.env.MAIN_URL +
                    "u/createstory",
                permanent: false,
            },
        };
    } else {
        const response = await fetch("http://localhost:3000/api/getStoryUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                session: session,
            }),
        });
        const data = await response.json();
        return {
            props: {
                story: data,
                user: session,
            },
        };
    }
}
