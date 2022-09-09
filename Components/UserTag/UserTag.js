import * as S from "./style";
import { LogoutBtn, LoginBtn } from "../../utils/MenuButtons";
export const LoggedInUserTag = ({ user }) => {
    return (
        <S.Container>
            <S.Name>{user}</S.Name>
            <S.BtnContainer>
                <button key={LogoutBtn.name} onClick={LogoutBtn.method}>
                    {LogoutBtn.icon}
                    {LogoutBtn.text}
                </button>
            </S.BtnContainer>
        </S.Container>
    );
};

export const LoggedOutUserTag = ({router}) => {
    const login = LoginBtn(router)
    return (
        <S.Container>
            <S.BtnContainer>
                <button key={login.name} onClick={login.method}>
                    {login.icon}
                    {login.text}
                </button>
            </S.BtnContainer>
        </S.Container>
    );
};
