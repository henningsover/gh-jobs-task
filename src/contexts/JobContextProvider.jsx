import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const JobContext = createContext({});

export const BASE_URL = 'https://us-central1-wands-2017.cloudfunctions.net/githubjobs?';

export default function JobContextProvider({ children }) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [jobList, setJobList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previousAPICalls, setPreviousAPICalls] = useState({});
  const [job, setJob] = useState(null);
  const history = useHistory();

  const fetchJobList = (searchValue) => {
    const url = `${BASE_URL}description=${searchValue}`;
    setLoading(true);
    console.log('start loading');
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        console.log('finished loading');
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchJob = (id) => {
    const url = `${BASE_URL}id=${id}`;
    setLoading(true);
    console.log('start loading job');
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        console.log('finished loading job');
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (previousAPICalls[searchInputValue]) {
      setJobList(previousAPICalls[searchInputValue]);
    } else {
      fetchJobList(searchInputValue);
    }
  };

  const submitAndLinkToSearchPage = (e) => {
    handleSubmit(e);
    history.push('/search');
  };

  useEffect(() => {
    if (jobList && Object.keys(jobList).length > 0) {
      console.log('joblist effect');
      if (!previousAPICalls[searchInputValue]) {
        setPreviousAPICalls({ ...previousAPICalls, [`${searchInputValue.toLowerCase()}`]: jobList });
      }
    }
  }, [jobList]);

  return (
    <JobContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        handleSubmit,
        loading,
        jobList,
        setJobList,
        submitAndLinkToSearchPage,
        fetchJob,
        job,
        setJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
