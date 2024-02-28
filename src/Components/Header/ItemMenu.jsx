import ArrowDown from "../../assets/arrow-down.svg";
import * as S from "./styles";

export default function ItemMenu({ name }) {
  return (
    <>
      <S.ButtonItemMenu>
        <span>{name}</span>
        <img src={ArrowDown} alt="Seta" />
      </S.ButtonItemMenu>
    </>
  );
}
