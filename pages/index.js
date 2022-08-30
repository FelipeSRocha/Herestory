import styled from "styled-components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import ActionBar from "../Components/ActionBar";
import ExplorerPreview from "../Components/ExplorerPreview";
import SortBy from "../utils/SortBy";
import Theme from "../styles/theme";
import { ProfileBtn, LoginBtn, LogoutBtn } from "../utils/MenuButtons";

const LoginPage = ({ story_list }) => {
    const router = useRouter();
    const { data, status } = useSession();
    const sorted_stories = SortBy(story_list, "publishedAt");

    return (
        <Theme>
            <Container id="container">
                <Menu id="menubar" key="menubar">
                    {status == "authenticated" ? (
                        <Username>{data.user.name}</Username>
                    ) : null}
                    <ActionBar
                        id="actionbar"
                        data={
                            status === "authenticated"
                                ? [ProfileBtn(router), LogoutBtn]
                                : [LoginBtn(router)]
                        }
                    ></ActionBar>
                </Menu>
                <View id="view">
                    {sorted_stories.length > 0 ? (
                        <ExplorerPreview data={sorted_stories} />
                    ) : (
                        <h1>Nothing Here</h1>
                    )}
                </View>
            </Container>
        </Theme>
    );
}
export default LoginPage
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Menu = styled.div`
    background: ${(props) => props.theme.color.secundary};
    width: 300px;
    min-width: 300px;
    height: 100vh;
    left: 0;
    gap: 20px;

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
    const response = await fetch(
        process.env.LOCAL
            ? process.env.MAIN_URL + "api/getExplorerPage"
            : "https://herestory.vercel.app/api/getExplorerPage"
    );
    if (response.status == 200) {
        const res = await response.json();
        return {
            props: res,
        };
    } else {
        return {
            props: { story_list: [] },
        };
    }
}
