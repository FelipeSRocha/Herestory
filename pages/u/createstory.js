import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import NewStory from "../../Components/NewStory";
import styled from "styled-components";

export default function userPage( data ) {
    const [story, setStory] = useState('data')
    const router = useRouter();

    function onchageTitle(){

    }
    function onchangeText(){

    }
    return (
        <Container id="container">
            <Menu id="menubar">

                <StoryList id="storylist">
                    <li>test1</li>

                </StoryList>
            </Menu>
            <NewStory id="storyview" data={story} onchageTitle={onchageTitle} onchangeText={onchangeText}>
                {" "}
            </NewStory>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
`;
const Menu = styled.div`
    background: #fee6c8;
    width: 300px;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
    border: 2px black solid;
    overflow: hidden;
`;
const StoryList = styled.div``;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination:
                    "/api/auth/signin?callbackUrl="+process.env.MAIN_URL+"u/createstory",
                permanent: false,
            },
        };
    } else {
        const response = await fetch("http://localhost:3000/api/createstory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                session: session,
            }),
        })
        const data = await response.json()
        return{
            props:{
                story:data
            }
        }
    }

    
}
