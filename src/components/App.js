import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import BaseCurrency from './BaseCurrency';
import CurrencyList from './CurrencyList';
import AddCurrency from './AddCurrency';
import LoadingPlaceholder from './LoadingPlaceholder';

const url = 'https://api.exchangeratesapi.io/latest?base=USD';

const StyledApp = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
`;

class App extends React.Component {
  state = {
    isLoading: false,
    usdInput: 10.0, // set default to 10
    exchangeRates: [],
    currencyList: ['IDR', 'GBP', 'EUR'] // default/initial display list
  };

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true
      });
      const res = await axios.get(url); // Fetch the data from API
      console.log(res.data);
      this.setState({
        isLoading: false,
        exchangeRates: res.data.rates
      });
    } catch (error) {
      console.log(error);
    }
  }

  onUSDChange = e => {
    this.setState({
      usdInput: e.target.value
    });
  };

  onAddClick = value => {
    if (!value) {
      alert('please select a currency to add');
    } else if (this.state.currencyList.indexOf(value) === -1) {
      this.setState(prevState => ({
        currencyList: [...prevState.currencyList, value]
      }));
    } else {
      alert('The currency you selected is already on the list');
    }
  };

  onRemoveClick = currency => {
    this.setState({
      currencyList: this.state.currencyList.filter(c => c !== currency)
    });
  };

  render() {
    return (
      <StyledApp>
        <BaseCurrency
          usdInput={this.state.usdInput}
          onUSDChange={this.onUSDChange}
        />
        {this.state.isLoading ? (
          <LoadingPlaceholder />
        ) : (
          <CurrencyList
            currencyList={this.state.currencyList}
            exchangeRates={this.state.exchangeRates}
            usdInput={this.state.usdInput}
            onRemoveClick={this.onRemoveClick}
          />
        )}
        <AddCurrency onAddClick={this.onAddClick} />
      </StyledApp>
    );
  }
}

export default App;
