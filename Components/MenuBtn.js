import styled from "styled-components";
import Theme from "../styles/theme";

const MenuBtn = ({ data }) => {
    return (
        <Theme>
            <Container>
                {data.map((button) => {
                    return (
                        <button
                            key={button.name}
                            className={button.name}
                            onClick={button.method}
                        >
                            <div></div>
                            {button.text}
                        </button>
                    );
                })}
            </Container>
        </Theme>
    );
};
export default MenuBtn;
const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media only screen and (max-width: ${(props) =>props.theme.MinSize.Large}) {
        flex-direction: row;
    }
    button {
        font-family: helvetica neue, helvetica, arial, sans-serif;
        width: 100%;
        font-size: 25px;
        padding: 10px;
        padding-left: 20px;
        background-color: ${(props) => props.theme.color.secundary};
        border: none;
        display: flex;
        gap: 10%;
        align-items: center;
        border-radius: 15px;
        overflow: hidden;
        :hover{
            background-color: ${(props) => props.theme.color.text};
        color:${(props) => props.theme.color.secundary};
        }
        div {
            height: 10px;
            width: 10px;
            border-radius: 5px;
            background-color: ${(props) => props.theme.color.text};
            flex: 1fr;
        }
    }


`;
