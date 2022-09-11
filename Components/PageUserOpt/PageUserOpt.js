import * as S from "./style";

const PageUserOpt = ({userPage, children}) => {
    return (
        <>
            <S.PageUser>{userPage + "'s Page"}
            
            </S.PageUser>
            {children}
        </>
    );
};
export default PageUserOpt
