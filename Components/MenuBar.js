import styled from "styled-components";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export default function MenuBar() {
    const { data: session } = useSession();
    const router = useRouter();
    function createStory() {
        router.push("./u/userhome");
    }
    function Signup() {
        router.push("./signup");
    }
    function Login() {
        router.push("./api/auth/signin");
    }
    return (
        <Menu id="menubar">
            <h1>Username</h1>
            <StoryList id="storylist">
                <li>test1</li>
                <li>test1</li>
                <li>test1</li>
                <li>test1</li>
                <li>test1</li>
                <li>test1</li>
            </StoryList>
            <UserBar>
                {!session ? (
                    <ActionBar>
                        <button onClick={Login}>Login</button>
                        <button onClick={Signup}>SignUp</button>
                    </ActionBar>
                ) : (
                    <>
                        <h1>{session.user.name}</h1>
                        <ActionBar>
                            <button onClick={createStory}>Create</button>
                            <button onClick={()=>{signOut()}}>Logout</button>

                        </ActionBar>
                    </>
                )}
            </UserBar>
        </Menu>
    );
}
const Menu = styled.div`
    background: #fee6c8;
    width: 300px;
    height: 100vh;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    box-sizing: border-box;
`;
const StoryList = styled.div`
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
const ActionBar = styled.div`
`;
