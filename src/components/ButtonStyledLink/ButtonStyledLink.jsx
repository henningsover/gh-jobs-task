import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function ButtonStyledLink(props) {
  const { linkKind, internalLink, externalLink, title } = props;
  const { setJob } = useContext(JobContext);
  const ButtonStyledLinkKind = {
    INTERNAL_PAGE: 0,
    EXTERNAL_PAGE: 1,
  };

  const renderInternalLink = () => {
    return (
      <S.InternalLinkWrapper onClick={() => setJob(null)}>
        <Link to={internalLink}>{title}</Link>
      </S.InternalLinkWrapper>
    );
  };

  const renderExternalLink = () => {
    return <S.ExternalLink href={externalLink}>{title}</S.ExternalLink>;
  };

  const renderButtonStyledLink = () => {
    if (linkKind === ButtonStyledLinkKind.INTERNAL_PAGE) {
      return renderInternalLink();
    }
    if (linkKind === ButtonStyledLinkKind.EXTERNAL_PAGE) {
      return renderExternalLink();
    }
    return null;
  };
  return renderButtonStyledLink();
}
