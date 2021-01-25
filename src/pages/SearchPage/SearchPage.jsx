import React, { useContext, useState } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobList from '../../components/JobList';
import JobSearchForm from '../../components/JobSearchForm';
import Loading from '../../components/Loading/Loading';
import { CenteredContainer } from '../../theme/layout';
import * as S from './styled';

export default function SearchPage() {
  const { handleSubmit, loading, jobList } = useContext(JobContext);

  return (
    <CenteredContainer>
      <S.SearchCard>
        <S.Title>Get your dream job now</S.Title>
        <JobSearchForm handleSubmit={handleSubmit} />
      </S.SearchCard>
      {loading ? <Loading /> : <JobList jobList={jobList} />}
    </CenteredContainer>
  );
}
