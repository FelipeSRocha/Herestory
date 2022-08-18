import styles from "./loginform.module.css";
import { useState } from "react";
import React from "react";
import {useRouter} from "next/router";

import InterativInput from "./secundary/interativeInput";
import InputPassword from "./secundary/password";
import Btn from "./secundary/button";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter()

    const handleChangeUser = (event) => {
        const text = event.target.value;
        setUsername(text);
    };
    const handleChangePass = (event) => {
        const text = event.target.value;
        setpassword(text);
    };
    function login() {
        //call function to login
        fetch("./api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: username,
                password: password,
            }),
        })
        .then(res=>{
            if(res.status==200){
                //if a positive response
                res.json()
                .then(res=>{
            
                    if(res.login){
                        //if server match the login
                        redirectuser(username)
                    }else{
                        //if server doesnt match the login
                        alert('Username or password does not match!')
                    }
                })
            }else{
                alert("Not able to login!")
            }}
            )
    }
    function signup() {
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
        })
        .then(res=>{
            if(res.status==200){
                //if a positive response
                res.json()
                .then(res=>{
            
                    if(res.signin){
                        //if server created a user
                        alert("User Created, you can login now!")
                        router.push(`/api/auth/signin`)
                    }else{
                        //if user already exists
                        alert('Username already exist, try another one!')
                    }
                })
            }else{
                alert("Not able to create a new User!")
            }}
            )

    }
    function redirectuser(username){
        router.push(`/u/${username}`)
    }
    return (
        <div className={styles.loginForm}>
            <InterativInput onChange={handleChangeUser} username={username} />
            <InputPassword onChange={handleChangePass} />
            <div className={styles.btn}>
                <Btn action={signup} id="sign_up">
                    Sign up
                </Btn>
            </div>
        </div>
    );
}


