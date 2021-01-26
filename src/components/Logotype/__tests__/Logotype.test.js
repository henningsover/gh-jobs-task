import { mount } from 'Enzyme';
import Logotype from '../Logotype';

const mockCompanyUrl = 'http://tokyo.uk';
const mockCompanyLogo =
  'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcG1XIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b226e353b04d22eb098d965c7bd04b81e3b650d8/OHcNlYZJ_400x400.jpg';

describe('Test renderLogotype', () => {
  it('should run renderLinkLogo if company_url is provided', () => {
    const wrapper = mount(<Logotype url={mockCompanyUrl} logoSrc={mockCompanyLogo} />);
    expect(wrapper.exists('.link-logo')).toBe(true);
    expect(wrapper.exists('.logo')).toBe(false);
  });
  it('should run renderLogo if company_url is not provided', () => {
    const wrapper = mount(<Logotype logoSrc={mockCompanyLogo} />);
    expect(wrapper.exists('.logo')).toBe(true);
    expect(wrapper.exists('.link-logo')).toBe(false);
  });
});

describe('Test renderLinkLogo', () => {
  it('should render an a tag that links to provided url', () => {
    const wrapper = mount(<Logotype url={mockCompanyUrl} logoSrc={mockCompanyLogo} />);
    expect(wrapper.find('a').props().href).toBe(mockCompanyUrl);
  });
  it('should render an img tag inside the a tag with a src value of provided logoSrc', () => {
    const wrapper = mount(<Logotype url={mockCompanyUrl} logoSrc={mockCompanyLogo} />);
    expect(wrapper.find('a img').props().src).toBe(mockCompanyLogo);
  });
});

describe('Test renderLogo', () => {
  it('should not render an a tag', () => {
    const wrapper = mount(<Logotype logoSrc={mockCompanyLogo} />);
    expect(wrapper.exists('a')).toBe(false);
  });
  it('should render an img tag with a src value of provided logoSrc', () => {
    const wrapper = mount(<Logotype logoSrc={mockCompanyLogo} />);
    expect(wrapper.find('img').props().src).toBe(mockCompanyLogo);
  });
});
