import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobItem from '../JobItem/JobItem';

export default function JobList() {
  const { jobList } = useContext(JobContext);

  return (
    <div>
      {jobList &&
        (jobList.length > 0 ? (
          jobList.map((job) => {
            return <JobItem key={job.id} job={job} />;
          })
        ) : (
          <p>No jobs found</p>
        ))}
    </div>
  );
}
