import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import StoryList from "../../Components/StoryList";
import StoryView from "../../Components/StoryView";
import styled from "styled-components";
import Theme from "../../styles/theme";
import ActionBar from "../../Components/ActionBar";
import SortBy from "../../utils/SortBy";
import { deleteFromDB, createStoryDB } from "../../utils/ManageStoryDB";

export default function userhome({ story_list }) {
    const sorted_stories = SortBy(story_list, "updatedAt");
    const router = useRouter();
    const [selected, setSelected] = useState(0);
    const [story, setStory] = useState(sorted_stories[selected]);
    const { data, status } = useSession();

    function selectStory(event) {
        setStory(sorted_stories[event.target.id]);
        setSelected(event.target.id);
    }

    const editstory = (event, key) => {
        router.push("profile/createstory/" + key);
    };
    let actionbar = [
        {
            name: "Home",
            text: "Home",
            method: () => {
                router.push("/");
            },
        },
        {
            name: "Logout",
            text: "Logout",
            method: () => {
                signOut();
            },
        },
        {
            name: "Create",
            text: "Create Story",
            method: async () => {
                await createStoryDB(data.user);
                router.reload()
            },
        },
    ];

    const deletestory = (key) => {
        deleteFromDB(key, data);
        router.reload();
    };

    return (
        <Theme>
            <Container id="container" key="container">
                <Menu id="menubar" key="menubar">
                    <UserBar>
                        {status == "authenticated" ? (
                            <Username>{data.user.name}</Username>
                        ) : null}
                        <ActionBar id="actionbar" data={actionbar}></ActionBar>
                    </UserBar>
                    <Storycontainer key="Storycontainer">
                        <StoryList
                            story={sorted_stories}
                            selected={selected}
                            selectStory={selectStory}
                            edit={editstory}
                            delete={(key) => deletestory(key)}
                        />
                    </Storycontainer>
                </Menu>
                {sorted_stories.length > 0 ? (
                    <StoryView id="storyview" story={story} />
                ) : (
                    <Empty>
                        <h2>It's so empty here...</h2>
                    </Empty>
                )}
            </Container>
        </Theme>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
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
const Menu = styled.div`
    background: #fee6c8;
    width: 300px;
    min-width: 300px;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
    border: 2px black solid;
    overflow: hidden;
`;
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
                    session: session,
                }),
            }
        );
        const { story_list } = await response.json();

        return {
            props: {
                story_list: story_list,
            },
        };
    }
}

const Storycontainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    overflow: auto;
    box-sizing: border-box;
`;
