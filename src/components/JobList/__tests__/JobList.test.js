import JobList from '../JobList';
import JobItem from '../../JobItem';
import { mount, shallow } from 'enzyme';
import JobContextProvider from '../../../contexts/JobContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { mockJobList } from '../../../mocks/jobMockData';

describe('Test rendering', () => {
  it('should render job items', () => {
    const wrapper = mount(
      <JobContextProvider>
        <BrowserRouter>
          <JobList jobList={mockJobList} />
        </BrowserRouter>
      </JobContextProvider>
    );
    expect(wrapper.containsMatchingElement(<JobItem />)).toEqual(true);
  });
  it('should not render JobItem components without "jobList" prop', () => {
    const wrapper = mount(
      <JobContextProvider>
        <BrowserRouter>
          <JobList />
        </BrowserRouter>
      </JobContextProvider>
    );
    expect(wrapper.containsMatchingElement(<JobItem />)).toEqual(false);
  });
  it('should render "No jobs found" when jobList is empty', () => {
    const emptyJobList = [];
    const wrapper = mount(<JobList jobList={emptyJobList} />);
    expect(wrapper.find('p').text()).toContain('No jobs found');
  });
});
