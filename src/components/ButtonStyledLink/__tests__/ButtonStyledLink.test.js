import { mount } from 'Enzyme';
import { BrowserRouter } from 'react-router-dom';
import { mockJob } from '../../../mocks/jobMockData';
import ButtonStyledLink from '../ButtonStyledLink';

describe('Test rendering', () => {
  it('should render div with classname "button-styled-link"', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ButtonStyledLink internalLink={`/search/${mockJob.id}`} title="Read more" />
      </BrowserRouter>
    );
    expect(wrapper.exists('.button-styled-link')).toBe(true);
  });
  it('should render an a tag inside the div with href to DetailsPage', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ButtonStyledLink internalLink={`/search/${mockJob.id}`} title="Read more" />
      </BrowserRouter>
    );
    expect(wrapper.find('.button-styled-link a').props().href).toBe(`/search/${mockJob.id}`);
  });
});
