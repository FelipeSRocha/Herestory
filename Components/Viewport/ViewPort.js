import styled from "styled-components";
import Theme from "../../styles/theme";

const ViewPort = ({ children }) => {
    return (
        <Theme>
            <Viewport>{children}</Viewport>
        </Theme>
    );
};
export default ViewPort;

const Viewport = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    @media only screen and (max-width: ${(props) =>props.theme.MinSize.Large}) {
        flex-direction:column
    }
`;
