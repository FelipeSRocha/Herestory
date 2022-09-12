import { useEffect } from "react";
import * as S from "./style";

const Viewport = ({ children }) => {
    useEffect(()=>{
        const view = document.getElementById("Viewport");
        let vh = window.innerHeight
        console.log(vh)
        view.style.height = `${vh}px`;
    },[])
    return <S.Viewport id="Viewport">{children}</S.Viewport>;
};
export default Viewport;
