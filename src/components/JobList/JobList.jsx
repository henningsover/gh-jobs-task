import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import JobItem from '../JobItem/JobItem';

export default function JobList({ jobList }) {
  return (
    <ul>
      {jobList &&
        (Object.keys(jobList).length > 0 ? (
          jobList.map((job) => {
            return <JobItem key={job.id} job={job} type={0} />;
          })
        ) : (
          <p>No jobs found</p>
        ))}
    </ul>
  );
}
