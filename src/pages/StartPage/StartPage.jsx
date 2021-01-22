import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobSearchForm from '../../components/JobSearchForm';
import { CenteredContainer } from '../../theme/layout';

export default function StartPage() {
  const { submitAndLinkToSearchPage } = useContext(JobContext);
  return (
    <CenteredContainer>
      <h1>Halloj</h1>
      <JobSearchForm handleSubmit={submitAndLinkToSearchPage} />
    </CenteredContainer>
  );
}
