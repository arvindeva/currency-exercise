import React from 'react';
import { shallow } from 'enzyme';
import CurrencyList from '../CurrencyList';

describe('renders CurrencyList', () => {
  test('renders CurrencyList with empty list', () => {
    const currencyList = [];

    const wrapper = shallow(<CurrencyList currencyList={currencyList} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders CurrencyList with actual currencies and empty exchange rates', () => {
    const currencyList = ['USD', 'GBP', 'IDR'];
    const exchangeRates = {};
    const wrapper = shallow(
      <CurrencyList currencyList={currencyList} exchangeRates={exchangeRates} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders CurrencyList with actual currencies and actual exchange rates', () => {
    const currencyList = ['CAD', 'CHF', 'IDR'];
    const exchangeRates = {
      CAD: 1.3320535714,
      CHF: 0.9995535714,
      IDR: 14220
    };
    const wrapper = shallow(
      <CurrencyList currencyList={currencyList} exchangeRates={exchangeRates} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
