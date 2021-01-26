import { shallow, mount } from 'enzyme';
import JobItem from '../JobItem';
import { JobContextProvider } from '../../../contexts/JobContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { mockJob } from '../../../mocks/jobMockData';
import ButtonStyledLink from '../../ButtonStyledLink';

describe('Test renderJobListItem', () => {
  it('should return renderJobListItem when type = 0', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.exists('.job-list-item')).toBe(true);
  });

  it('should render an h2 element containing job title', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.find('.job-title h2').text()).toBe(mockJob.title);
  });

  it('should render a strong element containing job type', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.find('.job-type strong').text()).toBe(mockJob.type);
  });

  it('should render a div containing html elements with job description', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    const descriptionContainer = wrapper.find('.descriptionContainer div');
    expect(descriptionContainer.html()).toContain(mockJob.description);
  });

  it('should render company logotype if company_logo contains an image url', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.exists('a img')).toBe(true);
  });

  it('should render company name instead of logotype if company_logo is null', () => {
    const alteredJob = { ...mockJob };
    alteredJob.company_logo = null;
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={alteredJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.exists('a img')).toBe(false);
    expect(wrapper.find('.companyName').text()).toBe(alteredJob.company);
  });

  it('should render a link to company web page', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.find('.companyLink a').props().href).toBe(mockJob.company_url);
  });

  it('should not render a link to company web page if "company_url" is not provided', () => {
    const alteredJob = { ...mockJob };
    alteredJob.company_url = null;
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={alteredJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.exists('.companyLink')).toBe(false);
  });

  it('should render a link to details page', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={0} />
      </BrowserRouter>
    );
    expect(wrapper.find('.button-styled-link a').props().href).toBe(`/search/${mockJob.id}`);
  });
});

describe('Test renderJobDetails', () => {
  it('should return renderJobDetails when type = 1 ', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={1} />
      </BrowserRouter>
    );
    expect(wrapper.exists('.job-details-wrapper')).toBe(true);
  });

  it('should render an h2 element containing job title', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={1} />
      </BrowserRouter>
    );
    expect(wrapper.find('.job-title h2').text()).toBe(mockJob.title);
  });

  it('should render a p element containing created time', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={1} />
      </BrowserRouter>
    );
    expect(wrapper.find('.job-created p').text()).toBe(mockJob.created_at);
  });

  it('should render a strong element containing job type and location', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={1} />
      </BrowserRouter>
    );
    expect(wrapper.find('.job-type-location strong').text()).toBe(`${mockJob.type} / ${mockJob.location}`);
  });

  it('should render a div containing html elements with job description', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={1} />
      </BrowserRouter>
    );
    const descriptionContainer = wrapper.find('.descriptionContainer div');
    expect(descriptionContainer.html()).toContain(mockJob.description);
  });

  it('should render company logotype if company_logo contains an image url', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={1} />
      </BrowserRouter>
    );
    expect(wrapper.exists('a img')).toBe(true);
  });

  it('should render company name instead of logotype if company_logo is null', () => {
    const alteredJob = { ...mockJob };
    alteredJob.company_logo = null;
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={alteredJob} type={1} />
      </BrowserRouter>
    );
    expect(wrapper.exists('a img')).toBe(false);
    expect(wrapper.find('.companyName').text()).toBe(alteredJob.company);
  });

  it('should render a div containing html elements with "how to apply"', () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobItem job={mockJob} type={1} />
      </BrowserRouter>
    );
    const descriptionContainer = wrapper.find('.applyContainer').find('div');
    expect(descriptionContainer.html()).toContain(mockJob.how_to_apply);
  });
});
