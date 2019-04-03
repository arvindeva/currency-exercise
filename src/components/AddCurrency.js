import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class AddCurrency extends React.Component {
  state = {
    value: ''
  };
  supportedCurrencies = [
    'USD',
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
      <div className="ui segment">
        <h1>Add Currency!</h1>
        <Dropdown
          placeholder="Select Currency"
          fluid
          selection
          options={this.options}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button
          className="ui button"
          onClick={() => this.props.onAddClick(this.state.value)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddCurrency;
