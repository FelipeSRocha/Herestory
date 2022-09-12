import { useEffect } from "react";
import * as S from "./style";

const Viewport = ({ children }) => {
    // const resetHeight = () => {
    //     const view = document.getElementById("Viewport");
    //     let vh = window.innerHeight;
    //     view.style.height = `${vh}px`;
    // };
    // useEffect(() => {
    //     resetHeight;
    //     window.addEventListener("resize", resetHeight);
    // }, []);
    return <S.Viewport id="Viewport">{children}</S.Viewport>;
};
export default Viewport;
