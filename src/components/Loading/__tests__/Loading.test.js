import { mount } from 'Enzyme';
import Loading from '../Loading';

describe('Test Loading', () => {
  it('should render an svg tag', () => {
    const wrapper = mount(<Loading />);
    expect(wrapper.exists('svg')).toBe(true);
  });
});
