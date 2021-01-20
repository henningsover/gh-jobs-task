import React from 'react';

export default function JobItem({ job }) {
  const getDescription = (description) => {
    return { __html: description };
  };
  return (
    <div>
      <h2>{job.title}</h2>
      <strong>{job.type}</strong>
      <a href={job.company_url}>Job page</a>
      <p dangerouslySetInnerHTML={getDescription(job.description)} />
      <img alt="Company logo" src={job.company_logo} />
    </div>
  );
}
