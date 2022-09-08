import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import LoginForm from "../Components/LoginForm/LoginForm";
import { GlobalStyle } from "../styles/globalStyle";

function LoginPage() {
    const {status} = useSession()
    const router = useRouter();
    useEffect(()=>{
        if(status ==="authenticated"){
            router.push('/profile')
        }
    },[status])
    return (
        <>
            <GlobalStyle />
            <LoginForm />
        </>
    );
}

export default LoginPage;
