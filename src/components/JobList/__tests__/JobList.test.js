import JobList from '../JobList';
import JobItem from '../../JobItem';
import { mount, shallow } from 'enzyme';
import JobContextProvider from '../../../contexts/JobContextProvider';
import { BrowserRouter } from 'react-router-dom';

const mockJob = {
  id: 0,
  type: 'Fulltime',
  url: 'https://jobs.github.com/positions/017147d0-0a3c-455c-97d5-7488c63b93e7',
  created_at: 'Mon Jan 25 14:19:17 UTC 2021',
  company: 'Tokyo',
  company_url: 'http://tokyo.uk',
  location: 'Remote',
  title: 'Freelance Full Stack Developers (Remote)',
  description:
    '<p>Key Role:</p>\n<p>Support day-to-day operations focused on building a next generation automated malware analysissystem.Apply advanced consulting and extensive technical expertise as well as full industry knowledge to develop innovative solutions to complex problems. Engage with multiple functional groups to comprehend client challenges, prototype new ideas and new technologies, and help to create solutions to drive the next wave of innovation. Analyze forensic, event, and signature data and binary, mo…is-Junction-Malware-Reverse-Engineer-Mid-R0099678/35608?source=JB-16301">https://careers.boozallen.com/jobs/JobDetail/Annapolis-Junction-Malware-Reverse-Engineer-Mid-R0099678/35608?source=JB-16301</a> to create a profile and apply to job number R0099678, click on Find Your Job and plug in this number.</p>\n<p>We’re an EOE that empowers our people—no matter their race, color, religion, sex, gender identity, sexual orientation, national origin, disability, or veteran status—to fearlessly drive change.</p>\n',
  how_to_apply: '<p>Apply at <a href="https://tokyo.uk/freelancers">https://tokyo.uk/freelancers</a></p>',
  company_logo:
    'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcG1XIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b226e353b04d22eb098d965c7bd04b81e3b650d8/OHcNlYZJ_400x400.jpg',
};

const mockJobList = [
  {
    id: 0,
    type: 'Fulltime',
    url: 'https://jobs.github.com/positions/017147d0-0a3c-455c-97d5-7488c63b93e7',
    created_at: 'Mon Jan 25 14:19:17 UTC 2021',
    company: 'Tokyo',
    company_url: 'http://tokyo.uk',
    location: 'Remote',
    title: 'Freelance Full Stack Developers (Remote)',
    description: '<p>Key Role:</p>',
    how_to_apply: '<p>Apply at <a href="https://tokyo.uk/freelancers">https://tokyo.uk/freelancers</a></p>',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcG1XIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b226e353b04d22eb098d965c7bd04b81e3b650d8/OHcNlYZJ_400x400.jpg',
  },
  {
    id: 1,
    type: 'Fulltime',
    url: 'https://jobs.github.com/positions/017147d0-0a3c-455c-97d5-7488c63b93e7',
    created_at: 'Mon Jan 25 14:19:17 UTC 2021',
    company: 'Tokyo',
    company_url: 'http://tokyo.uk',
    location: 'Remote',
    title: 'Freelance Full Stack Developers (Remote)',
    description: '<p>Key Role:</p>',
    how_to_apply: '<p>Apply at <a href="https://tokyo.uk/freelancers">https://tokyo.uk/freelancers</a></p>',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcG1XIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b226e353b04d22eb098d965c7bd04b81e3b650d8/OHcNlYZJ_400x400.jpg',
  },
];

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
