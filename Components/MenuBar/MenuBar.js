import { useState } from "react";
import * as S from "./style";

export default function MenuBar({ children }) {
    const [menuState, setMenuState] = useState(false);
    const clickMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <>
            <S.Menubar id="menubar" key="menubar">
                <h1>Herestory</h1>
                {children}
                {/* <S.Arrow onClick={clickMenu}>
                    <p>{menuState ? "X" : "Menu"}</p>
                </S.Arrow> */}
            </S.Menubar>
        </>
    );
}
