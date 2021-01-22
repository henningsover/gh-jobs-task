import React, { useEffect, useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobItem from '../../components/JobItem/JobItem';
import Loading from '../../components/Loading/Loading';
import { CenteredContainer } from '../../theme/layout';

export default function DetailsPage(props) {
  const { loading, job, fetchJob } = useContext(JobContext);
  const id = props.match.params.id;

  useEffect(() => {
    fetchJob(id);
  }, []);

  return (
    <CenteredContainer>
      <h1>Details page</h1>
      {loading && <Loading />}
      {job && <JobItem job={job} />}
    </CenteredContainer>
  );
}
