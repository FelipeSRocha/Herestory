import styles from "./loginform.module.css";
import { useState, React, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import InterativInput from "./secundary/interativeInput";
import InputPassword from "./secundary/password";
import Btn from "./secundary/button";

export default function LoginForm() {
    const {status} = useSession()
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter();

    useEffect(()=>{
        if(status==="authenticated"){
            router.push("/home")
        }
    },[status])

    const handleChangeUser = (event) => {
        const text = event.target.value;
        setUsername(text);
    };
    const handleChangePass = (event) => {
        const text = event.target.value;
        setpassword(text);
    };

    function signup() {
        if (!username) {
            alert("Username cannot be empty");
            return;
        }
        if (password.length < 8) {
            alert("Password must have a minimum of 8 characters ");
            return;
        }
        if (username && password.length > 7) {
            console.log("signup");
            // call function to sign in
            fetch("./api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: username,
                    password: password,
                }),
            }).then((res) => {
                if (res.status == 200) {
                    //if a positive response
                    res.json().then((res) => {
                        if (res.signin) {
                            //if server created a user
                            alert("User Created, you can login now!");
                            router.push(`/api/auth/signin`);
                        } else {
                            //if user already exists
                            alert("Username already exist, try another one!");
                        }
                    });
                } else {
                    alert("Not able to create a new User!");
                }
            });
        }
    }
    const login = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            user: username,
            password: password,
            redirect: false,
        });
        if(res.error){
            alert("Invalid user or password")
        }
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
