import { useRouter } from "next/router";
import styled from "styled-components";
import StoryView from "../../../Components/StoryView";

export default function userPage() {
    const router = useRouter();
    const userpage = router.query.user;

    function createStory() {
        console.log("log");
        fetch("../api/createstory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: "test",
            }),
        });
    }
    
    return (
        <Container id="container">
            <Menu id="menubar">
                <h1>{userpage}</h1>
                <StoryList id="storylist">
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                </StoryList>
                <UserBar>
                    <h1>{userpage}</h1>
                    <ActionBar>
                        <button onClick={createStory}>Create</button>
                        <button onClick={createStory}>Create</button>
                        <button onClick={createStory}>Create</button>
                        <button onClick={createStory}>Create</button>
                    </ActionBar>
                </UserBar>
            </Menu>
            <StoryView id="storyview"> </StoryView>
        </Container>
    );
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
const Menu = styled.div`
    background: #fee6c8;
    width: 300px;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
`;
const StoryList = styled.div``;

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
const ActionBar = styled.div`

`;
