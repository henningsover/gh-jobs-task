import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';
import * as S from './styled';

export default function JobSearchForm({ handleSubmit }) {
  const { searchInputValue, setSearchInputValue } = useContext(JobContext);
  return (
    <S.Form onSubmit={(e) => handleSubmit(e)}>
      <S.FormRow>
        <S.JobInput
          name="jobSearch"
          value={searchInputValue.replace(/\s/g, '+')}
          onChange={(e) => setSearchInputValue(e.target.value.replace(/\s/g, '+'))}
        ></S.JobInput>
        <S.SubmitButton type="submit">Go</S.SubmitButton>
      </S.FormRow>
    </S.Form>
  );
}
