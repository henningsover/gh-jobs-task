import styled from 'styled-components';

export const JobTitle = styled.h2``;
export const CreatedTime = styled.p`
  font-size: 14px;
  color: gray;
`;

export const DescriptionContainer = styled.div`
  max-width: 800px;
  p,
  ul,
  h1,
  h2,
  h3,
  h4,
  a {
    margin-bottom: 10px;
  }
  ul,
  ol {
    margin-left: 1em;
  }
`;

export const UnderTitle = styled.strong`
  font-size: 14px;
  color: gray;
`;

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  padding: 1em;
  margin: 2em 0;
`;

export const JobHeader = styled.div`
  margin-bottom: 1em;
`;

export const ApplyContainer = styled.div`
  margin-top: 2em;
  max-width: 260px;
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  max-width: 260px;
`;
