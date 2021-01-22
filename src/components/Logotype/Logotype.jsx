import React from 'react';
import * as S from './styled';

export default function Logotype({ url, logoSrc }) {
  const renderLinkLogo = () => {
    return (
      <S.LogotypeContainer>
        <a href={url}>
          <S.Logo alt="Company logo, link to company web page" src={logoSrc} />
        </a>
      </S.LogotypeContainer>
    );
  };

  const renderLogo = () => {
    return (
      <S.LogotypeContainer>
        <S.Logo alt="Company logo" src={logoSrc} />
      </S.LogotypeContainer>
    );
  };

  const renderLogotype = () => {
    if (url) {
      return renderLinkLogo();
    } else {
      return renderLogo();
    }
  };
  return renderLogotype();
}
