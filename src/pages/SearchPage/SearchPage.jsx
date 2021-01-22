import React, { useContext, useState } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobList from '../../components/JobList';
import JobSearchForm from '../../components/JobSearchForm';
import Loading from '../../components/Loading/Loading';
import { CenteredContainer } from '../../theme/layout';

export default function SearchPage() {
  const { handleSubmit, jobList, loading } = useContext(JobContext);

  return (
    <CenteredContainer>
      <JobSearchForm handleSubmit={handleSubmit} />
      {loading ? <Loading /> : <JobList />}
    </CenteredContainer>
  );
}
