import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext({});

export const BASE_URL = 'https://us-central1-wands-2017.cloudfunctions.net/githubjobs?';

export default function JobContextProvider({ children }) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [job, setJob] = useState(null);
  const [jobList, setJobList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previousJobResults, setPreviousJobResults] = useState({});
  const [previousJobListResults, setPreviousJobListResults] = useState({});

  const fetchJobList = (searchValue) => {
    const url = `${BASE_URL}description=${searchValue}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getJob = (id) => {
    if (previousJobResults[id]) {
      setJob(previousJobResults[id]);
    } else {
      fetchJob(id);
    }
  };

  const fetchJob = (id) => {
    const url = `${BASE_URL}id=${id}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJob(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    const searchKey = searchInputValue.toLowerCase();
    e.preventDefault();
    if (previousJobListResults[searchKey]) {
      setJobList(previousJobListResults[searchKey]);
    } else {
      fetchJobList(searchInputValue);
    }
  };

  useEffect(() => {
    if (jobList && Object.keys(jobList).length > 0) {
      const searchKey = searchInputValue.toLowerCase();
      if (previousJobListResults[searchKey] === undefined) {
        setPreviousJobListResults({ ...previousJobListResults, [searchKey]: jobList });
      }
    }
  }, [jobList]);

  useEffect(() => {
    if (job && Object.keys(job).length > 0) {
      if (previousJobResults[job.id] === undefined) {
        setPreviousJobResults({ ...previousJobResults, [job.id]: job });
      }
    }
  }, [job]);

  return (
    <JobContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        handleSubmit,
        loading,
        jobList,
        setJobList,
        fetchJob,
        getJob,
        job,
        setJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
