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
      <S.Wrapper className="job-details-wrapper">
        <S.LeftColumn>
          <S.JobHeader>
            <S.TitleRow>
              <S.JobTitle className="job-title">{job.title}</S.JobTitle>
              <S.CreatedTime className="job-created">{job.created_at}</S.CreatedTime>
            </S.TitleRow>
            <S.UnderTitle className="job-type-location">{`${job.type} / ${job.location}`}</S.UnderTitle>
          </S.JobHeader>
          <S.DescriptionContainer
            className="descriptionContainer"
            dangerouslySetInnerHTML={getDescription(job.description)}
          />
        </S.LeftColumn>
        <S.RightColumn>
          {job.company_logo ? (
            <Logotype url={job.company_url} logoSrc={job.company_logo} />
          ) : (
            <h2 className="companyName">{job.company}</h2>
          )}
          <S.ApplyTitle>Apply:</S.ApplyTitle>
          <S.ApplyContainer className="applyContainer" dangerouslySetInnerHTML={getApply(job.how_to_apply)} />
        </S.RightColumn>
      </S.Wrapper>
    );
  };

  const renderJobListItem = () => {
    return (
      <S.Wrapper className="job-list-item">
        <S.LeftColumn>
          <S.JobHeader>
            <S.JobTitle className="job-title">{job.title}</S.JobTitle>
            <S.UnderTitle className="job-type">{job.type}</S.UnderTitle>
          </S.JobHeader>
          <S.DescriptionContainer
            className="descriptionContainer"
            dangerouslySetInnerHTML={getDescription(job.description)}
          />
        </S.LeftColumn>
        <S.RightColumn>
          {job.company_logo ? (
            <Logotype url={job.company_url} logoSrc={job.company_logo} />
          ) : (
            <h2 className="companyName">{job.company}</h2>
          )}
          {job.company_url && (
            <S.CompanyLink className="companyLink" href={job.company_url}>
              Visit company website
            </S.CompanyLink>
          )}
          <ButtonStyledLink internalLink={`/search/${job.id}`} title="Read more" />
        </S.RightColumn>
      </S.Wrapper>
    );
  };

  return renderJobItem();
}
