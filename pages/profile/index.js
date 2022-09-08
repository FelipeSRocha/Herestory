import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

import SortBy from "../../utils/SortBy";
import { deleteFromDB } from "../../utils/ManageStoryDB";
import { HomeBtn, LogoutBtn, ProfileBtn } from "../../utils/MenuButtons";

import StoryList from "../../Components/StoryList/StoryList";
import StoryView from "../../Components/StoryView/StoryView";
import MenuBtn from "../../Components/MenuBtn/MenuBtn";
import MenuBar from "../../Components/MenuBar/MenuBar";
import ViewPort from "../../Components/Viewport/Viewport";
import StoryBar from "../../Components/StoryBar/StoryBar";

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
        <>
            <ViewPort id="container" key="container">
                <MenuBar id="menubar" key="menubar">
                    <div key="username">{name}</div>
                    <MenuBtn
                        id="MenuBtn"
                        key="MenuBtn"
                        data={[HomeBtn(router), ProfileBtn(router), LogoutBtn]}
                    ></MenuBtn>
                        <StoryList
                            story={sorted_stories}
                            selected={selected}
                            selectStory={selectStory}
                            edit={editstory}
                            deletestory={(key) => deletestory(key)}
                            router={router}
                            name={name}
                        />
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
