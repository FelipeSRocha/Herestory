import * as S from './style'

const UserTag = ({children}) =>{
    console.log(children.type)
    return(
        <S.Container>
            {children}
        </S.Container>
    )
}
export default UserTag