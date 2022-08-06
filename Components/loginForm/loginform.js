import React from "react";
import styles from "./loginform.module.css";
import { useState } from "react";

import InterativInput from "./secundary/interativeInput";
import InputPassword from "./secundary/password";
import Btn from "./secundary/button";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

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
      .then((res) => res.json())
      .then((data)=>console.log(data.text))
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
      .then((res) => {
        switch(res.status){
            case 400:
                alert("Usuário já existe")
                break
            case 200:
                alert("Usuario criado com sucesso!")
        }
      })
  }
  return (
    <div className={styles.loginForm}>
      <InterativInput onChange={handleChangeUser} username={username} />
      <InputPassword onChange={handleChangePass} />
      <div className={styles.btn}>
        <Btn action={login} id="login">
          Login
        </Btn>
        <Btn action={signup} id="sign_up">
          Sign up
        </Btn>
      </div>
    </div>
  );
}
