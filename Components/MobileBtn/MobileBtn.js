import { useState } from "react";
import * as S from "./style";

const MobileBtn = ({ data }) => {
    const [btnState, setBtnState] = useState("Expand");
    const [textState, setTextState] = useState("Expand");

    const stateBtn = () => {
        if (btnState === "Expand") {
            setBtnState("Shrinked");
            setTextState("TextShrinked");
        } else {
            setBtnState("Expand");
            setTextState("TextExpanded");
        }
    };
    return (
        <S.Container>
            <S.Shrinker className={btnState}>
                <S.btn>
                    <S.Icon>{data.icon}</S.Icon>
                    <S.Text className={textState}> {data.text}</S.Text>
                </S.btn>
            </S.Shrinker>
        </S.Container>
    );
};
export default MobileBtn;
