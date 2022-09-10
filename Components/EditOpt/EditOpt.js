import MenuBtn from "../MenuBtn/MenuBtn";
import * as S from "./style";

const EditOpt = ({ data }) => {
    return (
        <S.Container>
            <S.Header>Your Story</S.Header>

            <MenuBtn data={data}></MenuBtn>

        </S.Container>
    );
};
export default EditOpt;
