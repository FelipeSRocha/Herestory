import styled from "styled-components";
import Theme from "../../../styles/theme";

const StoryBar = ({ children }) => {
    return (
        <Theme>
            <Storybar>{children}</Storybar>
        </Theme>
    );
};
export default StoryBar;

const Storybar = styled.div`
    width:100%;
    height:90vh;
    display:flex;
    box-sizing:border-box;
    overflow:auto;
    z-index:1;
`;