import styled from "styled-components";
import ExplorerPreview from "../Components/ExplorerPreview";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage(data) {
    const router = useRouter();
    const session = useSession();
    const status = session.status === "unauthenticated" ? false : true;
    const stories = data.story_list;
    if(stories.length>0){stories.sort(function (a, b) {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    })}
    return (
        <Container id="container">
            <Menu id="menubar" key="menubar">
                <h1>{}</h1>
                <ActionBar>
                    {status ? (
                        <>
                            <button onClick={()=>router.push("./home")}>
                                Home
                            </button>
                            <button
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button onClick={()=>router.push("./login")}>Login</button>
                    )}
                </ActionBar>
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
    const res = await response.json();
    return {
        props: res,
    };
}
