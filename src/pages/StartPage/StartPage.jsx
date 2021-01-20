import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobSearchForm from '../../components/JobSearchForm';

export default function StartPage() {
  const { submitAndLinkToSearchPage } = useContext(JobContext);
  return (
    <div>
      <h1>Halloj</h1>
      <JobSearchForm handleSubmit={submitAndLinkToSearchPage} />
    </div>
  );
}
