import React from 'react';
import ButtonStyledLink from '../ButtonStyledLink/ButtonStyledLink';
import Logotype from '../Logotype/Logotype';
import * as S from './styled';

export default function JobItem({ job }) {
  const getDescription = (description) => {
    return { __html: description };
  };
  return (
    <S.Wrapper>
      <div style={{ flexGrow: 1 }}>
        <S.JobTitle>{job.title}</S.JobTitle>
        <strong>{job.type}</strong>
        <S.DescriptionContainer dangerouslySetInnerHTML={getDescription(job.description)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '1em' }}>
        <Logotype url={job.company_url} logoSrc={job.company_logo} />
        <ButtonStyledLink internalLink={`/search/${job.id}`} title="Read more" />
      </div>
    </S.Wrapper>
  );
}
