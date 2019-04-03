import React from 'react';
import {shallow} from 'enzyme';
import BaseCurrency from '../BaseCurrency';

test('renders BaseCurrency', () => {
  const wrapper = shallow(
    <BaseCurrency />
  );
  expect(wrapper).toMatchSnapshot();
});
