import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import NewStory from "../../../Components/editStory";
import styled from "styled-components";

export default function createstoryPage(data) {
    const story = data.story.story_list;
    const user = data.session.user.name;
    const session = data.session;

    const router = useRouter();
    const [title, setTitle] = useState(story.title);
    const [text, setText] = useState(story.text);
    const [savedState, setSavedState] = useState(true);
    const [publishedState, setPublishedState] = useState(story.published);
    const [publishedTime, setPublishedTime] = useState(story.publishedAt);

    function onchangeTitle(event) {
        setTitle(event.target.value);
        setSavedState(false);
    }
    function onchangeText(event) {
        setText(event.target.value);
        setSavedState(false);
    }
    function userHome() {
        router.push("../");
    }
    async function Save() {
        setSavedState(true);
        const update = await fetch("../../api/updateStory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                session: session,
                title: title,
                text: text,
                story_id: story.story_id,
                publishedAt: publishedTime,
                published: publishedState,
            }),
        }).then((res) => {
            if (res.status == 200) {
                alert("Story Saved");
            } else {
                alert("We cannot save yout story right now!");
            }
        });
    }
    async function Publish() {
        const result = confirm("Are you shure you want to publish this story?");
        if (result) {
            setPublishedState(true);
            setSavedState(true);
            const update = await fetch("../../api/updateStory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    session: session,
                    title: title,
                    text: text,
                    story_id: story.story_id,
                    published: true,
                    publishedAt: new Date(),
                }),
            }).then((res) => {
                if (res.status == 200) {
                    alert("Story Published");
                } else {
                    alert("We cannot publish yout story right now!");
                }
            });
        }
    }

    return (
        <Container id="container">
            <Menu id="menubar">
                <UserBar>
                    <h1>{user}</h1>
                    <ActionBar>
                        <button onClick={userHome}>Home</button>
                        <button
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Logout
                        </button>
                    </ActionBar>
                </UserBar>
                <StoryOpt>
                    <button onClick={Save}>Save</button>
                    {publishedState?(<></>):(
                    <button onClick={Publish}>Publish</button>

                    )}
                </StoryOpt>
                <p>{`Saved: ${savedState}`}</p>
                <p>{`Published: ${publishedState}`}</p>
            </Menu>
            <NewStory
                story={story}
                onchageTitle={onchangeTitle}
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
const StoryList = styled.div``;
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
const StoryOpt = styled.div``;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination:
                    "/api/auth/signin?callbackUrl=" + process.env.MAIN_URL,
                permanent: false,
            },
        };
    } else {
        if (context.params.createstory) {
            const response = await fetch(
                process.env.LOCAL
                    ? process.env.MAIN_URL + "api/getStory"
                    : "https://herestory.vercel.app/api/getStory",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        session: session,
                        story_id: context.params.createstory,
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
        } else {
            return {
                redirect: {
                    destination:
                        "/?callbackUrl=" +
                        process.env.MAIN_URL +
                        "u/[createstory]",
                    permanent: false,
                },
            };
        }
    }
}
