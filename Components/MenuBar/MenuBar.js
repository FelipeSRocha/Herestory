import { useState } from "react";
import * as S from "./style";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

export default function MenuBar({ children, MenuState, changeMenuState }) {

    return (
        <>
            <S.Arrow
                onClick={changeMenuState}
            >
                {MenuState ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
            </S.Arrow>
            <S.Container>
                <S.Menubar
                    id="menubar"
                    key="menubar"
                    className={MenuState ? "open" : "closed"}
                >
                    <h1>Herestory</h1>
                    {children}
                </S.Menubar>
            </S.Container>
        </>
    );
}
