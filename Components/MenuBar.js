import styled from "styled-components";
import Theme from "../styles/theme";
import { useState } from "react";

export default function MenuBar({ components }) {
    const [menuState, setMenuState] = useState(true);
    const clickMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <Theme>
            <Menu id="menubar" key="menubar">
                <ToggleMenu className={menuState ? "MenuOpen" : "MenuClose"}>
                    <Arrow onClick={clickMenu}>
                        <p>{menuState ? "<" : ">"}</p>
                    </Arrow>
                    {components.map((component) => {
                        return component;
                    })}
                </ToggleMenu>
            </Menu>
        </Theme>
    );
}
const Menu = styled.div`
    z-index: 3;
    width:0;
    .MenuClose {
        transform: translate(-100%);
        z-index: 3;

    }
    @media only screen and (max-width: ${(props) =>props.theme.MinSize.Large}) {
        position: absolute;
        left: 0;
        z-index:3;
    }
`;
const ToggleMenu = styled.div`
    background: ${(props) => props.theme.color.primary};
    width: 300px;
    height: 100vh;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-items: center;
    box-sizing: border-box;
    @media only screen and (max-width: ${(props) =>props.theme.MinSize.Large}) {   
        transition: 0.5s;
        width: 90vw;
    }
`;
const Arrow = styled.div`
    z-index:3;
    box-sizing: border-box;
    position: absolute;
    height: 60px;
    width: 10vw;
    font-style: bold;
    font-size: 25px;
    background-color: ${(props) => props.theme.color.primary};
    left: 90vw;
    bottom: 10vh;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: none;
    padding: 10px;
    p{
        margin:0;
    }
    @media only screen and (max-width: ${(props) =>props.theme.MinSize.Large}) {   
        display: flex;
    }
`;
