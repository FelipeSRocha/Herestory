import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

import ViewPort from "../Components/Viewport/Viewport";
import MenuBtn from "../Components/MenuBtn/MenuBtn";
import MenuBar from "../Components/MenuBar/MenuBar";
import MiniPage from "../Components/MiniPage/MiniPage";
import SortBy from "../utils/SortBy";
import { HomeBtn, ProfileBtn } from "../utils/MenuButtons";
import StoryBar from "../Components/StoryBar/StoryBar";
import { GlobalStyle } from "../styles/globalStyle";
import {
    LoggedInUserTag,
    LoggedOutUserTag,
} from "../Components/UserTag/UserTag";

const Home = ({ story_list, session }) => {
    const router = useRouter();
    const { status } = useSession();
    const sorted_stories = SortBy(story_list, "publishedAt");
    return (
        <>
            <GlobalStyle />
            <ViewPort id="ViewPort">
                <MenuBar id="MenuBar">
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
                <StoryBar id="StoryBar" text="Herestory">
                    {sorted_stories.length > 0 ? (
                        <MiniPage data={sorted_stories} router={router} />
                    ) : (
                        <h1>Nothing Here</h1>
                    )}
                </StoryBar>
            </ViewPort>
        </>
    );
};
export default Home;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const response = await fetch(
        process.env.LOCAL
            ? process.env.MAIN_URL + "api/getExplorerPage"
            : "https://herestory.vercel.app/api/getExplorerPage"
    );

    if (response.status == 200) {
        const { story_list } = await response.json();
        return {
            props: { story_list, session },
        };
    } else {
        return {
            props: { story_list: [], session },
        };
    }
}
