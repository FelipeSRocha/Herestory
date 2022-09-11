import { useRouter } from "next/router";
import { useState } from "react";
import { useSession, getSession } from "next-auth/react";

import styled from "styled-components";
import SortBy from "../../../utils/SortBy";
import MenuBtn from "../../../Components/MenuBtn/MenuBtn";
import MenuBar from "../../../Components/MenuBar/MenuBar";
import StoryPage from "../../../Components/StoryPage/StoryPage";
import { HomeBtn, ProfileBtn } from "../../../utils/MenuButtons";
import ViewPort from "../../../Components/Viewport/Viewport";
import {
    LoggedInUserTag,
    LoggedOutUserTag,
} from "../../../Components/UserTag/UserTag";
import { GlobalStyle } from "../../../styles/globalStyle";
import MiniPage from "../../../Components/MiniPage/MiniPage";

const userpage = ({ story_list, session, user: user }) => {
    const sorted_stories = SortBy(story_list, "publishedAt");
    const router = useRouter();
    const { status } = useSession();

    return (
        <>
            <GlobalStyle/>
            <ViewPort id="container" key="container">
                <MenuBar id="MenuBar" page={user}>
                    <MenuBtn
                        id="MenuBtn"
                        key="MenuBtn"
                        select="Home"
                        data={
                            status === "authenticated"
                                ? [HomeBtn(router), ProfileBtn(router)]
                                : [HomeBtn(router)]
                        }
                        
                    ></MenuBtn>

                    {status === "authenticated" ? (
                        <LoggedInUserTag user={session.user.name} />
                    ) : (
                        <LoggedOutUserTag router={router} />
                    )}
                </MenuBar>
                {sorted_stories.length > 0 ? (
                    <MiniPage data={sorted_stories} router={router} />
                ) : (
                    <Empty>
                        <h2>It's so empty here...</h2>
                    </Empty>
                )}
            </ViewPort>
        </>
    );
};
export default userpage;

const Empty = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (context.params.username) {
        const response = await fetch(
            process.env.LOCAL
                ? process.env.MAIN_URL + "api/getPublishedStoryUser"
                : "https://herestory.vercel.app/api/getPublishedStoryUser",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: context.params.username,
                }),
            }
        );
        const { story_list } = await response.json();
        return {
            props: {
                story_list,
                session,
                user: context.params.username,
            },
        };
    } else {
        return {
            redirect: {
                destination: "/?callbackUrl=" + process.env.MAIN_URL + "/u/[username]",
                permanent: false,
            },
        };
    }
}
