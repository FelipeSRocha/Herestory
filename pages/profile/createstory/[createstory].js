import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

import NewStory from "../../../Components/editStory";
import MenuBtn from "../../../Components/MenuBtn";
import {
    ReturnToBtn,
    SaveBtn,
    PublishBtn,
    unPublishBtn,
} from "../../../utils/MenuButtons";
import {
    saveStoryDB,
    publishStoryDB,
    unpublishStoryDB,
} from "../../../utils/ManageStoryDB";

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

    const Save = () => {
        saveStoryDB({
            title,
            text,
            story_id: story_list.story_id,
            published: publishedState,
            publishedAt: publishedTime,
        });
        setSavedState(true);
    };
    const Publish = () => {
        if (
            confirm(
                "You want to Publish this Story? This will make this glorious story appear on the home page of this site for everyone!"
            )
        ) {
            publishStoryDB({
                title: title,
                text: text,
                story_id: story_list.story_id,
                published: true,
                publishedAt: new Date(),
            });
            setSavedState(true);
            setPublishedState(true);
        }
    };
    const unPublish = () => {
        if (
            confirm(
                "You want to Unpublish this Story? This will make this story vanish to everyone else but you"
            )
        ) {
            unpublishStoryDB({
                title,
                text,
                story_id: story_list.story_id,
                published: false,
                publishedAt: publishedTime,
            });
            setSavedState(true);
            setPublishedState(false);
        }
    };

    return (
        <Theme>
            <Container id="container">
                <Menu id="menubar">
                    <Username>{name}</Username>

                    <MenuBtn
                        id="MenuBtn"
                        data={[ReturnToBtn(router, "profile")]}
                    ></MenuBtn>
                    <Head>
                        <h1>Your Stories</h1>
                        {savedState ? null : (
                            <MenuBtn
                                id="MenuBtn"
                                data={[SaveBtn(Save)]}
                            ></MenuBtn>
                        )}

                        {publishedState ? (
                            <MenuBtn
                                id="MenuBtn"
                                data={[unPublishBtn(unPublish)]}
                            ></MenuBtn>
                        ) : (
                            <MenuBtn
                                id="MenuBtn"
                                data={[PublishBtn(Publish)]}
                            ></MenuBtn>
                        )}
                        <p>
                            {savedState
                                ? "All changes Saved"
                                : "Changes unsaved"}
                        </p>
                        <p>
                            {publishedState
                                ? "Your Story is published"
                                : "Your Story is unpublished"}
                        </p>
                    </Head>
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
const Head = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
        font-family: helvetica neue, helvetica, arial, sans-serif;
        font-size: 25px;
        text-align: center;
    }
    p {
        font-family: helvetica neue, helvetica, arial, sans-serif;
        font-size: 25px;
        text-align: center;
    }
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
