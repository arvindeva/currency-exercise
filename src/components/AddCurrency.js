import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

import currencyNames from '../lib/currencyNames';

const StyledAddCurrency = styled.div.attrs({
  className: 'ui segments'
})`
  .content {
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-gap: 10px;
  }
`;

class AddCurrency extends React.Component {
  state = {
    value: ''
  };

  supportedCurrencies = [
    'USD',
    'EUR',
    'CAD',
    'IDR',
    'GBP',
    'CHF',
    'SGD',
    'INR',
    'MYR',
    'JPY',
    'KRW'
  ];

  // Create dropdown items from array of currencies
  options = this.supportedCurrencies.map(currency => {
    return {
      key: currency,
      text: `${currency} - ${currencyNames[currency]}`,
      value: currency
    };
  });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <StyledAddCurrency className="ui segments">
        <div className="ui segment">
          <h1>Add More Currencies</h1>
        </div>
        <div className="ui segment content">
          <Dropdown
            placeholder="Select Currency"
            fluid
            selection
            options={this.options}
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button
            className="ui button basic black"
            onClick={() => this.props.onAddClick(this.state.value)}
          >
            Add
          </button>
        </div>
      </StyledAddCurrency>
    );
  }
}

export default AddCurrency;
