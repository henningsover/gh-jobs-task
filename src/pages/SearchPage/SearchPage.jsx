import React, { useContext, useState } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobList from '../../components/JobList';
import JobSearchForm from '../../components/JobSearchForm';
import Loading from '../../components/Loading/Loading';

export default function SearchPage() {
  const { handleSubmit, jobList, loading } = useContext(JobContext);

  return (
    <div>
      <JobSearchForm handleSubmit={handleSubmit} />
      {loading ? <Loading /> : <JobList />}
    </div>
  );
}
