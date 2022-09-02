import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import StoryList from "../../Components/StoryList";
import StoryView from "../../Components/StoryView";
import styled from "styled-components";
import Theme from "../../styles/theme";
import MenuBtn from "../../Components/MenuBtn";
import MenuBar from "../../Components/Viewport/MenuBar/MenuBar";
import SortBy from "../../utils/SortBy";
import { deleteFromDB } from "../../utils/ManageStoryDB";
import { HomeBtn, LogoutBtn, ProfileBtn } from "../../utils/MenuButtons";
import ViewPort from "../../Components/Viewport/Viewport";
import StoryBar from "../../Components/Viewport/StoryBar/StoryBar";

const userhome = ({
    story_list,
    session: {
        user: { name },
    },
}) => {
    const sorted_stories = SortBy(story_list, "updatedAt");
    const router = useRouter();
    const [selected, setSelected] = useState(0);
    const [story, setStory] = useState(sorted_stories[selected]);

    const selectStory = (event) => {
        setStory(sorted_stories[event.target.id]);
        setSelected(event.target.id);
    };

    const editstory = (key) => {
        router.push("profile/createstory/" + key);
    };

    const deletestory = (key) => {
        if (confirm("You want to delete this Masterpiece?")) {
            deleteFromDB(key, name);
            router.reload();
        }
    };
    return (
        <Theme>
            <ViewPort id="container" key="container">
                <MenuBar id="menubar" key="menubar">
                    <Username key="username">{name}</Username>
                    <MenuBtn
                        id="MenuBtn"
                        key="MenuBtn"
                        data={[HomeBtn(router), ProfileBtn(router), LogoutBtn]}
                    ></MenuBtn>
                    <Storycontainer key="Storycontainer">
                        <StoryList
                            story={sorted_stories}
                            selected={selected}
                            selectStory={selectStory}
                            edit={editstory}
                            deletestory={(key) => deletestory(key)}
                            router={router}
                            name={name}
                        />
                    </Storycontainer>
                </MenuBar>
                <StoryBar>
                    {sorted_stories.length > 0 ? (
                        <StoryView id="storyview" story={story} />
                    ) : (
                        <Empty>
                            <h2>It's so empty here...</h2>
                        </Empty>
                    )}
                </StoryBar>
            </ViewPort>
        </Theme>
    );
};
export default userhome;

const Username = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.font.primary};
    font-size: ${(props) => props.theme.size.sz30};
    display: flex;
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
