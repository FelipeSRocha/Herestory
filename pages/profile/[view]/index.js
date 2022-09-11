import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { HomeBtn, ProfileBtn } from "../../../utils/MenuButtons";
import { LoggedInUserTag } from "../../../Components/UserTag/UserTag";

import StoryEditPage from "../../../Components/StoryEditPage/StoryEditPage";
import StoryPage from "../../../Components/StoryPage/StoryPage";

import MenuBtn from "../../../Components/MenuBtn/MenuBtn";
import MenuBar from "../../../Components/MenuBar/MenuBar";
import {
    EditBtn,
    SaveBtn,
    PublishBtn,
    unPublishBtn,
    readBtn,
    deleteBtn,
} from "../../../utils/MenuButtons";
import {
    saveStoryDB,
    publishStoryDB,
    unpublishStoryDB,
    deleteFromDB,
} from "../../../utils/ManageStoryDB";

import ViewPort from "../../../Components/Viewport/Viewport";
import { GlobalStyle } from "../../../styles/globalStyle";
import EditOpt from "../../../Components/EditOpt/EditOpt";
const createstoryPage = ({ story_list, session }) => {
    const router = useRouter();
    const [edit, setEdit] = useState(false);
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
    const editStory = () => {
        setEdit(true);
    };
    const readStory = () => {
        Save();
        router.reload();
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
    const deletestory = () => {
        if (confirm("You want to delete this Masterpiece?")) {
            deleteFromDB(router, story_list.story_id, session.user.name);
        }
    };
    return (
        <>
            <GlobalStyle />
            <ViewPort id="container">
                <MenuBar id="MenuBar">
                    <MenuBtn
                        id="MenuBtn"
                        key="MenuBtn"
                        data={[HomeBtn(router), ProfileBtn(router)]}
                    ></MenuBtn>
                    {edit ? (
                        <EditOpt
                            data={[
                                readBtn(readStory),
                                SaveBtn(Save),
                                publishedState
                                    ? unPublishBtn(unPublish)
                                    : PublishBtn(Publish),
                                deleteBtn(deletestory),
                            ]}
                        ></EditOpt>
                    ) : (
                        <EditOpt data={[EditBtn(editStory)]}></EditOpt>
                    )}

                    <LoggedInUserTag user={session.user.name} />
                </MenuBar>
                {edit ? (
                    <StoryEditPage
                        story={story_list}
                        onchageTitle={onchangeTitle}
                        onchangeText={onchangeText}
                    >
                        {" "}
                    </StoryEditPage>
                ) : (
                    <StoryPage id="StoryPage" story={story_list} />
                )}
            </ViewPort>
        </>
    );
};
export default createstoryPage;

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
        if (context.params.view) {
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
                        story_id: context.params.view,
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
                        "profile/[view]",
                    permanent: false,
                },
            };
        }
    }
}
