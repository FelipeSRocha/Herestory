import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

import NewStory from "../../../Components/editStory";
import MenuBtn from "../../../Components/MenuBtn";
import { updateStoryDB } from "../../../utils/ManageStoryDB";
import { ReturnToBtn } from "../../../utils/MenuButtons";
import Theme from "../../../styles/theme";

const createstoryPage = ({
    story_list,
    session: {
        user: { name },
    },
}) => {
    const router = useRouter();
    const [title, setTitle] = useState(story_list.title);
    const [text, setText] = useState(story_list.text);
    const [savedState, setSavedState] = useState(true);
    const [publishedState, setPublishedState] = useState(story_list.published);
    const [publishedTime, setPublishedTime] = useState(story_list.publishedAt);

    const onchangeTitle = (event) => {
        setTitle(event.target.value);
        setSavedState(false);
    };
    const onchangeText = (event) => {
        setText(event.target.value);
        setSavedState(false);
    };
    const userHome = () => {
        router.push("../");
    };
    const Save = () => {
        updateStoryDB({
            title,
            text,
            story_id: story_list.story_id,
            published: publishedState,
            publishedAt: publishedTime,
        });
        setSavedState(true);
    };
    const Publish = () => {
        updateStoryDB({
            title: title,
            text: text,
            story_id: story_list.story_id,
            published: true,
            publishedAt: new Date(),
        });
        setSavedState(true);
        setPublishedState(true);
    };
    const unPublish = () => {
        updateStoryDB({
            title,
            text,
            story_id: story_list.story_id,
            published: false,
            publishedAt: publishedTime,
        });
        setSavedState(true);
        setPublishedState(false);
    };

    return (
        <Theme>
            <Container id="container">
                <Menu id="menubar">
                    <Username>{name}</Username>

                    <MenuBtn id="MenuBtn" data={[ReturnToBtn(router, "profile")]}></MenuBtn>
                    <StoryOpt>
                        <button onClick={Save}>Save</button>
                        {publishedState ? (
                            <button onClick={unPublish}>unPublish</button>
                        ) : (
                            <button onClick={Publish}>Publish</button>
                        )}
                    </StoryOpt>
                    <p>{`Saved: ${savedState}`}</p>
                    <p>{`Published: ${publishedState}`}</p>
                </Menu>
                <NewStory
                    story={story_list}
                    onchageTitle={onchangeTitle}
                    onchangeText={onchangeText}
                >
                    {" "}
                </NewStory>
            </Container>
        </Theme>
    );
};
export default createstoryPage;
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
`;
const Menu = styled.div`
    background: ${(props) => props.theme.color.primary};
    height: 100vh;
    width: 300px;
    min-width: 300px;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
    border: 2px black solid;
    overflow: hidden;
    box-sizing: border-box;
`;
const Username = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.font.primary};
    font-size: ${(props) => props.theme.size.sz30};
    display: flex;
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
                        session,
                        story_id: context.params.createstory,
                    }),
                }
            );
            const { story_list } = await response.json();
            console.log(story_list);
            return {
                props: {
                    story_list,
                    session,
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
