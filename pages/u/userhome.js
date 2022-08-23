import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import StoryList from "../../Components/StoryList";
import StoryView from "../../Components/StoryView";
import styled from "styled-components";

export default function userhome(data) {
    const [selected, setSelected] = useState(0);
    const [story, setStory] = useState(data.story.story_list[selected]);
    
    const router = useRouter();
    const user = data.session.user.name;
    const stories = data.story.story_list;
    const session = data.session;

    function onchageTitle() {}
    function onchangeText() {}

    function selectStory(event) {
        setStory(stories[event.target.id]);
        setSelected(event.target.id);
    }

    function editstory(event, key) {
        router.push("./createstory/" + key);
    }
    async function deletestory(event, key) {
        const createNewStory = await fetch("../api/deleteStory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: user,
                session: session,
                story_id: key,
            }),
        }).then(() => {
            alert("Story Deleted");
            router.reload(window.location.pathname);
        });
    }
    async function createStory() {
        const createNewStory = await fetch("../api/createnewstory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: user,
                session: session,
            }),
        }).then(() => {
            alert("Story Created");
            router.reload(window.location.pathname);
        });
    }
    return (
        <Container id="container" key="container">
            <Menu id="menubar" key="menubar">
                <UserBar>
                    <h1>{user}</h1>
                    <ActionBar>
                        <button onClick={createStory}>Create New Story</button>
                        <button
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Logout
                        </button>
                    </ActionBar>
                </UserBar>
                <Storycontainer key="Storycontainer">
                    <StoryList
                        story={stories}
                        selected={selected}
                        selectStory={selectStory}
                        edit={editstory}
                        delete={deletestory}
                    />
                </Storycontainer>
            </Menu>
            {data.story.story_list.length>0?(
                <StoryView
                id="storyview"
                story={story}
                onchageTitle={onchageTitle}
                onchangeText={onchangeText}/>)
                :(<Empty>
                    <h2>It's so empty here...</h2>
                </Empty>)
            }
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
`;
const Empty = styled.div`
        display:flex;
        width: 100%;
        height: 100%; 
        justify-content: center;
        align-items: center;
`
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
const UserBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5px 5px;
    gap: 10px;
    border: 2px solid black;
    h1 {
        margin: 0;
    }
`;
const ActionBar = styled.div``;
export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination:
                    "/api/auth/signin?callbackUrl=" +
                    process.env.MAIN_URL +
                    "u/userhome",
                permanent: false,
            },
        };
    } else {
        const response = await fetch(
            process.env.LOCAL
                ? process.env.MAIN_URL + "api/getStoryUser"
                : "https://herestory.vercel.app/api/getStoryUser",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    session: session,
                }),
            }
        );
        const data = await response.json();
        return {
            props: {
                story: data,
                session: session,
            },
        };
    }
}

const Storycontainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    overflow: auto;
    box-sizing: border-box;
`;
