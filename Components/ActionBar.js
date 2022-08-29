import styled from "styled-components";
import { useRouter } from "next/router";
import Theme from "../styles/theme";

export default function ActionBar({ data }) {
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
                            {button.text}
                        </button>
                    );
                })}
            </Container>
        </Theme>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    button {
        font-family: helvetica neue, helvetica, arial, sans-serif;

        width: 100%;
        font-size: 30px;
        padding: 10px;
        background-color: ${props => props.theme.color.secundary};
        border: 3px solid ${props => props.theme.color.primary};

    }
    .Home:hover {
        background-color: ${props => props.theme.color.primary};
    }
    .Profile:hover {
        background-color: ${props => props.theme.color.primary};
    }
    .Logout:hover {
        background-color: ${props => props.theme.color.primary};
    }
    .Login:hover {
        background-color: ${props => props.theme.color.primary};
    }
    .Create:hover {
        background-color: ${props => props.theme.color.primary};
    }
`;
