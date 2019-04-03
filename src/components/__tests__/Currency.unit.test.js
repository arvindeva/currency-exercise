import React from 'react';
import { shallow, mount } from 'enzyme';

import Currency from '../Currency';

describe('Currency component tests', () => {
  test('renders Currency', () => {
    const wrapper = shallow(<Currency />);
    expect(wrapper).toMatchSnapshot();
  });

  test('calls onClick event on click of the minus sign', () => {
    const onRemoveClick = jest.fn();
    let wrapper = mount(<Currency onRemoveClick={onRemoveClick} />);
    wrapper
      .find('.minus')
      .first()
      .simulate('click');
    expect(onRemoveClick).toHaveBeenCalled();
  });
});
