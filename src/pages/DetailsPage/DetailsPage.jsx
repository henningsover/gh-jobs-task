import React, { useEffect, useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import Loading from '../../components/Loading/Loading';
import { CenteredContainer } from '../../theme/layout';
import JobItem from '../../components/JobItem/JobItem';

export default function DetailsPage(props) {
  const { loading, job, fetchJob } = useContext(JobContext);
  const id = props.match.params.id;

  useEffect(() => {
    fetchJob(id);
  }, []);

  return (
    <CenteredContainer>
      {loading && <Loading />}
      {job && <JobItem job={job} type={1} />}
    </CenteredContainer>
  );
}
