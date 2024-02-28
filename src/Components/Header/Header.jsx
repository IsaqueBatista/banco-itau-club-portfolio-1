import React from "react";
import * as S from "./styles";

import ItemMenu from "./ItemMenu";

import LogoItau from "../../assets/logo.svg";
import IconUser from "../../assets/icon-user.svg";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.ContainerItens>
          <div>
            <S.Img src={LogoItau} alt="Logo itaú" />
          </div>

          <S.Ul>

            <S.Li>
              <ItemMenu name="Para você" />
            </S.Li>
            <S.Li>
              <ItemMenu name="Para empresas " />
            </S.Li>
            <S.Li>
              <ItemMenu name="Serviços " />
            </S.Li>
            <S.Li>
              <ItemMenu name="Ajuda" />
            </S.Li>
            
          </S.Ul>

          <S.DivButtonAccess>
            <S.ButtonAccess>
              <img src={IconUser} alt="Icon user" />
              <span>Acessar Conta</span>
            </S.ButtonAccess>
          </S.DivButtonAccess>
        </S.ContainerItens>
      </S.Container>
    </S.Header>
  );
}
