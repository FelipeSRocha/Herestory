import styled from "styled-components";
import LoginForm from "../Components/loginForm/loginform";
import Theme from "../styles/theme";

function LoginPage() {
    return (
        <Theme>
            <Container>
                <LoginForm></LoginForm>
            </Container>
        </Theme>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export default LoginPage;
