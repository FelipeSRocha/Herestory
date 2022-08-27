import styled from "styled-components";
import ExplorerPreview from "../Components/ExplorerPreview";

export default function LoginPage(data) {
    const stories = data.story_list;
    return (
        <Container id="container">
            <Menu id="menubar" key="menubar">
                <h1>User</h1>
                <UserBar>
                    <ActionBar></ActionBar>
                </UserBar>
            </Menu>
            <View id="view">
                {stories.length > 0 ? (
                    <ExplorerPreview data={stories} />
                ) : (
                    <h1>Nothing Here</h1>
                )}
            </View>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Menu = styled.div`
    background: #fee6c8;
    width: 300px;
    min-width: 300px;
    height: 100vh;
    left: 0;
    padding: 20px;
    gap: 20px;

    display: flex;
    flex-direction: column;
    position: relative;
    border: 2px black solid;
    overflow: hidden;
    box-sizing: border-box;
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
const ActionBar = styled.div``;
const View = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow:auto;
`;

export async function getServerSideProps(context) {
    const response = await fetch(
        process.env.LOCAL
            ? process.env.MAIN_URL + "api/getExplorerPage"
            : "https://herestory.vercel.app/api/getExplorerPage"
    );
    const res = await response.json();
    return {
        props: res,
    };
}
