import styles from "./loginform.module.css";
import { useState, React, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import InterativInput from "./secundary/interativeInput";
import InputPassword from "./secundary/password";
import Btn from "./secundary/button";
import { Login, SignUp } from "../../utils/ManageLoginDB";
import styled from "styled-components";

export default function LoginForm() {
    const { status } = useSession();
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/profile");
        }
    }, [status]);

    const handleChangeUser = (event) => {
        const text = event.target.value;
        setUsername(text);
    };
    const handleChangePass = (event) => {
        const text = event.target.value;
        setpassword(text);
    };

    const signup = (e) => {
        SignUp(e, username, password);
    };
    const login = (e) => {
        Login(e, username, password);
    };

    return (
        <Container className={styles.loginForm}>
            <InterativInput onChange={handleChangeUser} username={username} />
            <InputPassword onChange={handleChangePass} />
            <div className={styles.btn}>
                <Btn onClick={login} id="login">
                    Login
                </Btn>
                <Btn onClick={signup} id="sign_up">
                    Sign up
                </Btn>
            </div>
        </Container>
    );
}
const Container = styled.div`
    background-color: #fff6e7;
    max-width: 80vw;
    grid-row: auto;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.402);

    display: grid;
    gap: 10px;

`
