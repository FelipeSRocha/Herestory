import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { HomeBtn, ProfileBtn, ReturnBtn } from "../../../../utils/MenuButtons";
import {
    LoggedInUserTag,
    LoggedOutUserTag,
} from "../../../../Components/UserTag/UserTag";
import { useState } from "react";

import StoryPage from "../../../../Components/StoryPage/StoryPage";

import MenuBtn from "../../../../Components/MenuBtn/MenuBtn";
import MenuBar from "../../../../Components/MenuBar/MenuBar";

import ViewPort from "../../../../Components/Viewport/Viewport";
import { GlobalStyle } from "../../../../styles/globalStyle";
import PageUserOpt from "../../../../Components/PageUserOpt/PageUserOpt";

const ViewPage = ({ story_single, session, user }) => {
    const router = useRouter();
    const { status } = useSession();
    const [menuState, setMenuState] = useState(false);

    const changeMenuState = () => {
        setMenuState(!menuState);
    };
    return (
        <>
            <GlobalStyle />
            <ViewPort id="container">
                <MenuBar
                    id="MenuBar"
                    MenuState={menuState}
                    changeMenuState={changeMenuState}
                >
                    <MenuBtn
                        id="MenuBtn"
                        key="MenuBtn"
                        data={
                            status === "authenticated"
                                ? [HomeBtn(router), ProfileBtn(router)]
                                : [HomeBtn(router)]
                        }
                    ></MenuBtn>
                    <PageUserOpt text={user + "'s Page"}>
                        <MenuBtn
                            id="return"
                            key="return"
                            data={[ReturnBtn(router, user)]}
                        ></MenuBtn>
                    </PageUserOpt>
                    {status === "authenticated" ? (
                        <LoggedInUserTag user={session.user.name} />
                    ) : (
                        <LoggedOutUserTag router={router} />
                    )}
                </MenuBar>
                <StoryPage id="StoryPage" story={story_single} />
            </ViewPort>
        </>
    );
};
export default ViewPage;

export async function getServerSideProps(context) {
    console.log(context.params);
    const session = await getSession(context);
    if (context.params.story) {
        const response = await fetch(
            process.env.LOCAL
                ? process.env.MAIN_URL +
                      `api/viewer/story?user=${context.params.username}&story_id=${context.params.story}`
                : `https://herestory.vercel.app/api/viewer/story?user=${context.params.username}&story_id=${context.params.story}`,
            {
                method: "GET",
            }
        );
        const { story_single } = await response.json();
        return {
            props: {
                story_single,
                session,
                user: context.params.username,
            },
        };
    } else {
        return {
            redirect: {
                destination: "/?callbackUrl=" + process.env.MAIN_URL + "/",
                permanent: false,
            },
        };
    }
}
