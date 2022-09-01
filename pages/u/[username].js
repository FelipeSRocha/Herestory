import { useRouter } from "next/router";
import { useState } from "react";
import Theme from "../../styles/theme";
import styled from "styled-components";
import SortBy from "../../utils/SortBy";
import MenuBtn from "../../Components/MenuBtn";
import { HomeBtn, LogoutBtn, ProfileBtn } from "../../utils/MenuButtons";
import StoryListHome from "../../Components/StoryListHome";
import StoryView from "../../Components/StoryView"

const userpage = ({story_list, user:user}) => {
    const sorted_stories = SortBy(story_list, "publishedAt");
    const router = useRouter();
    const [selected, setSelected] = useState(0);
    const [story, setStory] = useState(sorted_stories[selected]);

    const selectStory = (event) => {
        setStory(sorted_stories[event.target.id]);
        setSelected(event.target.id);
    };
    return (
        <Theme>
            <Container id="container" key="container">
                <Menu id="menubar" key="menubar">
                    <Username>{user}</Username>
                    <MenuBtn
                        id="MenuBtn"
                        data={[HomeBtn(router),ProfileBtn(router), LogoutBtn]}
                    ></MenuBtn>
                    <Storycontainer key="Storycontainer">
                        <StoryListHome
                            story={sorted_stories}
                            selected={selected}
                            selectStory={selectStory}
                            router={router}
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
};
export default userpage;

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
                user:context.params.username
            },
        };
    } else {
        return {
            redirect: {
                destination:
                    "/?callbackUrl=" + process.env.MAIN_URL + "/",
                permanent: false,
            },
        };
    }
}
