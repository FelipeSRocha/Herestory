
import * as S from "./style"

const MenuBtn = ({ data, select }) => {
    return (
            <S.Container>
                {data.map((button) => {
                    return (
                        <button
                            key={button.name}
                            className={select===button.name?"selected":""}
                            onClick={button.method}
                        >
                            {button.icon}
                            {button.text}
                        </button>
                    );
                })}
            </S.Container>
    );
};
export default MenuBtn;

