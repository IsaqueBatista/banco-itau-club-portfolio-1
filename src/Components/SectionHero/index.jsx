import React from "react";

import * as S from "./styles";

import ImageAppleStore from "../../assets/btn-apple-store.svg";
import ImageGooglePlay from "../../assets/btn-google-play.svg";
import Arrow from "../../assets/arrow-explorer.svg";

import WomanImage from "../../assets/woman.png";

export default function SectionHero() {
  return (
    <S.Section>
      <S.Container>
        <S.DivLeft>
          <S.H1>Tenha seu Banco na palma da mão</S.H1>
          <S.P>
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito para você.
          </S.P>

          <S.DivButtons>
            <S.Button>
              <img src={ImageAppleStore} alt="Apple Store" />
            </S.Button>
            <S.Button>
              <img src={ImageGooglePlay} alt="Google Play" />
            </S.Button>
          </S.DivButtons>

          <S.ButtonExplorer>
            <img src={Arrow} alt="Arrow down" />
            <S.Span>Continue explorando</S.Span>
          </S.ButtonExplorer>
        </S.DivLeft>

        <S.ImageWoman src={WomanImage} alt="Woman" />
      </S.Container>
    </S.Section>
  );
}
