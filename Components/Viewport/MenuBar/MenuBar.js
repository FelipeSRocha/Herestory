import styled from "styled-components";
import Theme from "../../../styles/theme";
import { useState } from "react";

export default function MenuBar({ children }) {
    const [menuState, setMenuState] = useState(false);
    const clickMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <Theme>
            <Menubar id="menubar" key="menubar">
                {children}
            </Menubar>
            <MenuMobile id="MenuMobile" key="MenuMobile">
                <ToggleMenu className={menuState ? "MenuOpen" : "MenuClose"}>
                    {children.slice(1)}
                    <Arrow onClick={clickMenu}>
                        <p>{menuState ? "X" : "Menu"}</p>
                    </Arrow>
                </ToggleMenu>
            </MenuMobile>
        </Theme>
    );
}
const Menubar = styled.div`
    z-index: 3;
    width: 300px;
    min-width: 300px;
    position: relative;
    background: ${(props) => props.theme.color.primary};
    height: 100vh;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-items: center;
    box-sizing: border-box;
    @media only screen and (max-width: ${(props) => props.theme.MinSize.Large}) {
           
        display: none;
    }
`;
const MenuMobile = styled.div`
    z-index: 3;
    height: 10vh;
    box-sizing: border-box;
    position: relative;
    @media only screen and (min-width: ${(props) =>props.theme.MinSize.Large}) {
            
        display: none;
    }
    .MenuOpen {
        height: 70vh;
    }
`;
const ToggleMenu = styled.div`
    position:relative;
    width: 100vw;
    height: 10vh;
    display: flex;
    gap: 20px;
    padding: 2vw;
    flex-direction: column;
    justify-items: center;
    box-sizing: border-box;
    z-index: 3;
    background: ${(props) => props.theme.color.primary};
    transition: 0.5s;

`;
const Arrow = styled.div`
    z-index: 3;
    position: absolute;
    bottom:0;
    transform:translateY(100%);
    right:0;
    width: 100px;
    height: 50px;
    background: ${(props) => props.theme.color.primary};
    display:flex;
    align-items:center;
    justify-content:center;
    p {
        margin: 0;
        font-size:30px;
    }
`;
