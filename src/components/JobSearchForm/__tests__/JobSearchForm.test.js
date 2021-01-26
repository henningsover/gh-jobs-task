import JobSearchForm from '../JobSearchForm';
import { mount, shallow } from 'enzyme';
import JobContextProvider from '../../../contexts/JobContextProvider';

describe('Test rendering', () => {
  it('should render a form element', () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobSearchForm />
      </JobContextProvider>
    );
    expect(wrapper.exists('form')).toBe(true);
  });
  it('should render an input element', () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobSearchForm />
      </JobContextProvider>
    );
    expect(wrapper.exists('input')).toBe(true);
  });
  it('should render a button element with type "submit"', () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobSearchForm />
      </JobContextProvider>
    );
    expect(wrapper.exists('button')).toBe(true);
    expect(wrapper.find('button').props().type).toBe('submit');
  });
});

describe('Test input on change', () => {
  it('should set correct value', () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobSearchForm />
      </JobContextProvider>
    );
    wrapper.find('input').simulate('change', { target: { value: 'Javascript' } });
    expect(wrapper.find('input').props().value).toBe('Javascript');
  });

  it('should replace empty space with +', () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobSearchForm />
      </JobContextProvider>
    );
    wrapper.find('input').simulate('change', { target: { value: 'Javascript Java' } });
    expect(wrapper.find('input').props().value).toBe('Javascript+Java');
  });
});
