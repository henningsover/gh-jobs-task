import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import * as S from './styled';

export default function Loading() {
  return (
    <S.LoadingWrapper>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </S.LoadingWrapper>
  );
}
