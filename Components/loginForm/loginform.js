import { useState } from "react";
import * as S from "./style";
import { Login, SignUp } from "../../utils/ManageLoginDB";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    const login = (e) =>{
        Login(e, username, password)
    }
    const signup = (e) =>{
        SignUp(e, username, password)
    }
    
    return (
        <S.Container>
            <S.Form>
                <S.Text>Welcome,</S.Text>
                <S.Input
                    placeholder="Username"
                    onChange={changeUsername}
                ></S.Input>
                <S.Input
                    placeholder="Password"
                    onChange={changePassword}
                    type="password"
                ></S.Input>
                <S.BtnArea>
                    <S.Btn onClick={login}>Login</S.Btn>

                    <S.Btn onClick={signup}>Signup</S.Btn>
                </S.BtnArea>
            </S.Form>
        </S.Container>
    );
};

export default LoginForm;
