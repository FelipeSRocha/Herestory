import { useState } from "react";
import * as S from "./style";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

export default function MenuBar({ children }) {
    const [menuState, setMenuState] = useState(false);
    const clickMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <>
            <S.Arrow
                onClick={clickMenu}
            >
                {menuState ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
            </S.Arrow>
            <S.Container>
                <S.Menubar
                    id="menubar"
                    key="menubar"
                    className={menuState ? "open" : "closed"}
                >
                    <h1>Herestory</h1>
                    {children}
                </S.Menubar>
            </S.Container>
        </>
    );
}
