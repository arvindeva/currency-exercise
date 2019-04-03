import React from 'react';
import { Dropdown } from 'semantic-ui-react';

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

  options = this.supportedCurrencies.map(currency => {
    return { key: currency, text: currency, value: currency };
  });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="ui segments">
        <div className="ui segment">
          <h1>Add Currency!</h1>
        </div>
        <div className="ui segment">
          <Dropdown
            placeholder="Select Currency"
            fluid
            selection
            options={this.options}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>
        <div className="ui segment">
          <button
            className="ui button"
            onClick={() => this.props.onAddClick(this.state.value)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddCurrency;
