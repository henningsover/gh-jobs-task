import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobList from '../../components/JobList';
import JobSearchForm from '../../components/JobSearchForm';

export default function SearchPage() {
  const { handleSubmit, jobList } = useContext(JobContext);
  return (
    <div>
      <JobSearchForm handleSubmit={handleSubmit} />
      {jobList && <JobList />}
    </div>
  );
}
