import React from 'react';
import { shallow, mount } from 'enzyme';
import BaseCurrency from '../BaseCurrency';

describe('BaseCurrency tests', () => {
  test('renders BaseCurrency', () => {
    const wrapper = shallow(<BaseCurrency />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Fires onUSDChange correctly', () => {
    const onUSDChange = jest.fn();
    const baseCurrency = mount(<BaseCurrency onUSDChange={onUSDChange} />);
    expect(baseCurrency.find('input').simulate('change'));
    expect(onUSDChange).toHaveBeenCalledTimes(1);
  });
});
