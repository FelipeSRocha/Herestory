import * as S from "./style";

const PageUserOpt = ({ text, children }) => {
    return (
        <>
            <S.PageUser>{text}</S.PageUser>
            {children}
        </>
    );
};
export default PageUserOpt;
