import { useRouter } from "next/router";
import NewStory from "../../../Components/NewStory";
import styled from "styled-components";
import StoryView from "../../../Components/StoryView";


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
            <NewStory id="storyview"> </NewStory>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow:hidden;
`;
const Menu = styled.div`
    background: #FEE6C8;
    width: 300px;
    padding:20px;
    display:flex;
    gap:20px;
    flex-direction:column;
    position:relative;
    border: 2px black solid;
    overflow:hidden;
`;
const StoryList = styled.div`
`;
