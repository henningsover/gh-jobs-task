import styled from 'styled-components';

export const FormWrapper = styled.div``;

export const Form = styled.form`
  width: 300px;
  margin: auto;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1em;
  color: white;
  font-weight: bold;
`;

export const JobInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border-style: solid;
  background-color: white;
  flex-grow: 1;
`;

export const SubmitButton = styled.button`
  padding: 5px 1em;
  border-radius: 5px;
  border-style: solid;
  margin-left: 5px;
`;
