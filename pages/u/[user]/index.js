import { useRouter } from "next/router";
import styled from "styled-components";
import StoryView from "../../../Components/StoryView";
import ActionBar from "../../../Components/ActionBar";

export default function userPage() {
    const router = useRouter();
    const userpage = router.query.user;
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
`;
const StoryList = styled.div``;
