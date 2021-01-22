import React from 'react';
import ButtonStyledLink from '../ButtonStyledLink/ButtonStyledLink';
import Logotype from '../Logotype/Logotype';
import * as S from './styled';

export default function JobItem({ job }) {
  const getDescription = (description) => {
    return { __html: description };
  };
  return (
    <div>
      <S.JobTitle>{job.title}</S.JobTitle>
      <strong>{job.type}</strong>
      <Logotype url={job.company_url} logoSrc={job.company_logo} />
      <div dangerouslySetInnerHTML={getDescription(job.description)} />
      <ButtonStyledLink linkKind={0} internalLink={`/search/${job.id}`} title="Read more" />
    </div>
  );
}
