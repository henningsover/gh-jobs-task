import React from 'react';
import * as S from './styled';

export default function Hero({ imgUrl, children }) {
  return <S.HeroWrapper img={imgUrl}>{children}</S.HeroWrapper>;
}
