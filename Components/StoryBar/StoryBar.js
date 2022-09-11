import * as S from "./style"

const StoryBar = ({ children, text }) => {
    return (
            <S.Storybar>
                <S.Title>{text}</S.Title>
                {children}</S.Storybar>
    );
};
export default StoryBar;

