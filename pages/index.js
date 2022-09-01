import styled from "styled-components";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

import MenuBtn from "../Components/MenuBtn";
import ExplorerPreview from "../Components/ExplorerPreview";
import SortBy from "../utils/SortBy";
import Theme from "../styles/theme";
import { ProfileBtn, LoginBtn, LogoutBtn } from "../utils/MenuButtons";

const Home = ({ story_list, session }) => {
    const router = useRouter();
    const { status } = useSession();
    const sorted_stories = SortBy(story_list, "publishedAt");

    const goTo = () =>{
        console.log("alou")
    }
    return (
        <Theme>
            <Container id="container">
                <Menu id="menubar" key="menubar">
                    {status == "authenticated" ? (
                        <Username>{session.user.name}</Username>
                    ) : null}
                    <MenuBtn
                        id="MenuBtn"
                        data={
                            status === "authenticated"
                                ? [ProfileBtn(router), LogoutBtn]
                                : [LoginBtn(router)]
                        }
                    ></MenuBtn>
                </Menu>
                <View id="view">
                    {sorted_stories.length > 0 ? (
                        <ExplorerPreview data={sorted_stories} router={router}/>
                    ) : (
                        <h1>Nothing Here</h1>
                    )}
                </View>
            </Container>
        </Theme>
    );
};
export default Home;
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
