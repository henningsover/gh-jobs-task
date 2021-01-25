import { shallow, mount } from 'enzyme';
import JobItem from '../JobItem';
import { JobContextProvider } from '../../../contexts/JobContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { mockJob } from '../../../mocks/jobMockData';
import ButtonStyledLink from '../../ButtonStyledLink';

describe('Test renderJobListItem', () => {
  it('should render JobListItem when type = 0', () => {
    const job = mockJob;
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={job} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.exists('li')).toBe(true);
    expect(wrapper.containsMatchingElement(<ButtonStyledLink />)).toEqual(true);
  });
  it('should render an h2 element containing job title', () => {
    const job = mockJob;
    const jobTitle = job.title;
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={job} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.find('h2').text()).toBe(jobTitle);
  });
  it('should render a strong element containing job type', () => {
    const job = mockJob;
    const jobType = job.type;
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={job} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.find('strong').text()).toBe(jobType);
  });
  it('should render a div containing html elements with job description', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    const descriptionContainer = wrapper.find('.descriptionContainer').find('div');
    expect(descriptionContainer.html()).toContain(mockJob.description);
    // console.log(descriptionContainer);
  });
});
