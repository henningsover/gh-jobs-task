import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function ButtonStyledLink(props) {
  const { internalLink, title } = props;
  const { setJob } = useContext(JobContext);

  return (
    <S.InternalLinkWrapper onClick={() => setJob(null)}>
      <Link to={internalLink}>{title}</Link>
    </S.InternalLinkWrapper>
  );
}
