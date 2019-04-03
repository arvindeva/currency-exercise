import React from 'react';
import { shallow } from 'enzyme';

import LoadingPlaceholder from '../LoadingPlaceholder';

describe('Placeholder component', () => {
  test('renders Placeholder', () => {
    const wrapper = shallow(<LoadingPlaceholder />);
    expect(wrapper).toMatchSnapshot();
  });
});
