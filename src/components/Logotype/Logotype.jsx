import React from 'react';
import { Logo, LogotypeContainer } from '.';

export default function Logotype({ url, logoSrc }) {
  const renderLinkLogo = () => {
    return (
      <LogotypeContainer>
        <a href={url}>
          <Logo alt="Company logo, link to company web page" src={logoSrc} />
        </a>
      </LogotypeContainer>
    );
  };

  const renderLogo = () => {
    return (
      <LogotypeContainer>
        <Logo alt="Company logo" src={logoSrc} />
      </LogotypeContainer>
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
