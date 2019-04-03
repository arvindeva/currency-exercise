import React from 'react';
import { shallow, mount } from 'enzyme';
import AddCurrency from '../AddCurrency';

describe('AddCurrency tests', () => {
  test('renders AddCurrency', () => {
    const wrapper = shallow(<AddCurrency />);
    expect(wrapper).toMatchSnapshot();
  });

  test('calls onClick event on click of the button', () => {
    const onAddClick = jest.fn();
    let wrapper = mount(<AddCurrency onAddClick={onAddClick} />);
    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(onAddClick).toHaveBeenCalled();
  });
});
