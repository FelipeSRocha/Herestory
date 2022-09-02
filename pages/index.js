import styled from "styled-components";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

import ViewPort from "../Components/Viewport/Viewport";
import MenuBtn from "../Components/MenuBtn";
import MenuBar from "../Components/Viewport/MenuBar/MenuBar";
import ExplorerPreview from "../Components/ExplorerPreview";
import SortBy from "../utils/SortBy";
import Theme from "../styles/theme";
import {
    HomeBtn,
    LoginBtn,
    LogoutBtn,
    ProfileBtn,
} from "../utils/MenuButtons";
import StoryBar from "../Components/Viewport/StoryBar/StoryBar";

const Home = ({ story_list, session }) => {

    const router = useRouter();
    const { status } = useSession();
    const sorted_stories = SortBy(story_list, "publishedAt");
    return (
        <Theme>
            <ViewPort id="ViewPort">
                <MenuBar id="MenuBar">
                    {status == "authenticated" ? (
                        <Username key="username">{session.user.name}</Username>
                    ) : null}
                    <MenuBtn
                        id="MenuBtn"
                        key="MenuBtn"
                        data={
                            status === "authenticated"
                                ? [
                                      HomeBtn(router),
                                      ProfileBtn(router),
                                      LogoutBtn,
                                  ]
                                : [LoginBtn(router)]
                        }
                    ></MenuBtn>
                </MenuBar>
                <StoryBar id="StoryBar">
                    {sorted_stories.length > 0 ? (
                        <ExplorerPreview
                            data={sorted_stories}
                            router={router}
                        />
                    ) : (
                        <h1>Nothing Here</h1>
                    )}
                </StoryBar>
            </ViewPort>
        </Theme>
    );
};
export default Home;
const Username = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.font.primary};
    font-size: ${(props) => props.theme.size.sz30};
    display: flex;
`;
const View = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

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
