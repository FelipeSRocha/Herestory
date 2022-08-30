import styles from "./loginform.module.css";
import { useState, React, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import InterativInput from "./secundary/interativeInput";
import InputPassword from "./secundary/password";
import Btn from "./secundary/button";
import { Login, SignUp } from "../../utils/ManageLoginDB";

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
        <div className={styles.loginForm}>
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
        </div>
    );
}
