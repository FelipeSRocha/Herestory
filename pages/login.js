import styled from "styled-components";
import LoginForm from '../Components/loginForm/loginform'


export default function LoginPage() {

    return (
        <Container>
            <LoginForm></LoginForm>
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
