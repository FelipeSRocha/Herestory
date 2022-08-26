import styled from "styled-components";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginForm from "../Components/loginForm/loginform";

function Home() {
    const router = useRouter();
    const { data: session } = useSession();
    function userHome() {
        router.push("./u/userhome");
    }

    function Login() {
        router.push("/login");
    }
    return (
        <Container>
            <LoginForm></LoginForm>
        </Container>
        // <Menu id="menubar">
        //     <UserBar>
        //         {!session ? (
        //             <ActionBar>
        //                 <button onClick={Login}>Login / Create account</button>
        //             </ActionBar>
        //         ) : (
        //             <>
        //                 <h1>{session.user.name}</h1>
        //                 <ActionBar>
        //                     <button onClick={userHome}>Home</button>
        //                     <button
        //                         onClick={() => {
        //                             signOut();
        //                         }}
        //                     >
        //                         Logout
        //                     </button>
        //                 </ActionBar>
        //             </>
        //         )}
        //     </UserBar>
        // </Menu>
    );
}
// const Menu = styled.div`
//     background: #fee6c8;
//     width: 300px;
//     height: 100vh;
//     padding: 20px;
//     display: flex;
//     gap: 20px;
//     flex-direction: column;
//     justify-content: space-between;
//     justify-items: center;
//     box-sizing: border-box;
// `;
// const UserBar = styled.div`
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     padding: 5px 5px;
//     gap: 10px;
//     border: 2px solid black;
//     h1 {
//         margin: 0;
//     }
// `;
// const ActionBar = styled.div``;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Home;
