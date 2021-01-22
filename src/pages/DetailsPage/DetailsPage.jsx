import React, { useEffect, useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobItem from '../../components/JobItem/JobItem';
import Loading from '../../components/Loading/Loading';

export default function DetailsPage(props) {
  const { loading, job, fetchJob } = useContext(JobContext);
  const id = props.match.params.id;

  useEffect(() => {
    fetchJob(id);
  }, []);

  return (
    <div>
      <h1>Details page</h1>
      {loading && <Loading />}
      {job && <JobItem job={job} />}
    </div>
  );
}
