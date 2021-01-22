import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const JobContext = createContext({});

const BASE_URL = 'https://us-central1-wands-2017.cloudfunctions.net/githubjobs?';

export default function JobContextProvider({ children }) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [jobList, setJobList] = useState(null);
  const [job, setJob] = useState(null);
  const history = useHistory();

  const fetchJobList = (searchValue) => {
    const url = `${BASE_URL}description=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobList(data));
  };

  const fetchJob = (id) => {
    const url = `${BASE_URL}id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transformedSearchValue = searchInputValue.replace(/\s/g, '+');
    fetchJobList(transformedSearchValue);
  };

  const submitAndLinkToSearchPage = (e) => {
    handleSubmit(e);
    history.push('/search');
  };

  return (
    <JobContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        handleSubmit,
        jobList,
        setJobList,
        submitAndLinkToSearchPage,
        fetchJob,
        job,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
