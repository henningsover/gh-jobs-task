import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function ButtonStyledLink({ internalLink, title }) {
  const { setJob } = useContext(JobContext);

  return (
    <S.InternalLinkWrapper className="button-styled-link" onClick={() => setJob(null)}>
      <Link to={internalLink}>{title}</Link>
    </S.InternalLinkWrapper>
  );
}
