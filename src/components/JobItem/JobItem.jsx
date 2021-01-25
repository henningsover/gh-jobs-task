import React from 'react';
import ButtonStyledLink from '../ButtonStyledLink/ButtonStyledLink';
import Logotype from '../Logotype/Logotype';
import * as S from './styled';

export default function JobItem({ job, type }) {
  const JobItemType = {
    JOB_LIST_ITEM: 0,
    DETAILS: 1,
  };

  const getDescription = (description) => {
    return { __html: description };
  };
  const getApply = (apply) => {
    return { __html: apply };
  };

  const renderJobItem = () => {
    if (type === JobItemType.JOB_LIST_ITEM) {
      return renderJobListItem();
    }
    if (type === JobItemType.DETAILS) {
      return renderJobDetails();
    }
  };

  const renderJobDetails = () => {
    return (
      <S.Wrapper>
        <div style={{ flexGrow: 1 }}>
          <S.JobHeader>
            <S.TitleRow>
              <S.JobTitle>{job.title}</S.JobTitle>
              <S.CreatedTime>{job.created_at}</S.CreatedTime>
            </S.TitleRow>
            <S.UnderTitle>{`${job.type} / ${job.location}`}</S.UnderTitle>
          </S.JobHeader>
          <S.DescriptionContainer dangerouslySetInnerHTML={getDescription(job.description)} />
        </div>
        <S.RightColumn>
          {job.company_logo && <Logotype url={job.company_url} logoSrc={job.company_logo} />}
          <h3>Apply:</h3>
          <S.ApplyContainer dangerouslySetInnerHTML={getApply(job.how_to_apply)} />
        </S.RightColumn>
      </S.Wrapper>
    );
  };

  const renderJobListItem = () => {
    return (
      <S.Wrapper>
        <div style={{ flexGrow: 1 }}>
          <S.JobHeader>
            <S.JobTitle>{job.title}</S.JobTitle>
            <S.UnderTitle>{job.type}</S.UnderTitle>
          </S.JobHeader>
          <S.DescriptionContainer dangerouslySetInnerHTML={getDescription(job.description)} />
        </div>
        <S.RightColumn>
          {job.company_logo && <Logotype url={job.company_url} logoSrc={job.company_logo} />}
          <ButtonStyledLink internalLink={`/search/${job.id}`} title="Read more" />
        </S.RightColumn>
      </S.Wrapper>
    );
  };

  return renderJobItem();
}
