import { useEffect } from "react";
import * as S from "./style";

const Viewport = ({ children }) => {
    const resetHeight = () => {
        const view = document.getElementById("Viewport");
        view.style.height = `${window.innerHeight}px`;
        view.style.maxheight = `${window.innerHeight}px`;
    };
    useEffect(() => {
        resetHeight;
        window.addEventListener("resize", resetHeight);
    }, []);
    return <S.Viewport id="Viewport">{children}</S.Viewport>;
};
export default Viewport;
