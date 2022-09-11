import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../styles/globalStyle";

import SortBy from "../../utils/SortBy";
import { deleteFromDB } from "../../utils/ManageStoryDB";
import { HomeBtn, ProfileBtn, CreateStoryBtn } from "../../utils/MenuButtons";

import StoryList from "../../Components/StoryList/StoryList";
import MenuBtn from "../../Components/MenuBtn/MenuBtn";
import MenuBar from "../../Components/MenuBar/MenuBar";
import ViewPort from "../../Components/Viewport/Viewport";
import StoryBar from "../../Components/StoryBar/StoryBar";
import { LoggedInUserTag } from "../../Components/UserTag/UserTag";
import MiniPageProfile from "../../Components/MiniPageProfile/MiniPageProfile";
import PageUserOpt from "../../Components/PageUserOpt/PageUserOpt";

const userhome = ({ story_list, session }) => {
    const sorted_stories = SortBy(story_list, "updatedAt");
    const router = useRouter();
    const [selected, setSelected] = useState(0);
    const [story, setStory] = useState(sorted_stories[selected]);

    return (
        <>
            <GlobalStyle />

            <ViewPort id="container" key="container">
                <MenuBar id="MenuBar">
                    <MenuBtn
                        id="MenuBtn"
                        key="MenuBtn"
                        select="Profile"
                        data={[HomeBtn(router), ProfileBtn(router)]}
                    ></MenuBtn>
                    <PageUserOpt text="Your Page">
                        <MenuBtn
                            id="CreateBtn"
                            key="CreateBtn"
                            data={[CreateStoryBtn(router, session.user.name)]}
                        ></MenuBtn>
                    </PageUserOpt>
                    <LoggedInUserTag user={session.user.name} />
                </MenuBar>
                <StoryBar text="Your Page">
                    {sorted_stories.length > 0 ? (
                        <MiniPageProfile
                            data={sorted_stories}
                            router={router}
                        />
                    ) : (
                        <Empty>
                            <h2>It's so empty here...</h2>
                        </Empty>
                    )}
                </StoryBar>
            </ViewPort>
        </>
    );
};
export default userhome;

const Storycontainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    overflow: auto;
    box-sizing: border-box;
`;

const Empty = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
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
                    session,
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
    }
}
