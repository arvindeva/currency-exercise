import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import BaseCurrency from './BaseCurrency';
import CurrencyList from './CurrencyList';
import AddCurrency from './AddCurrency';
import LoadingPlaceholder from './LoadingPlaceholder';

const url = 'https://api.exchangeratesapi.io/latest?base=USD';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e5e5e5;
  }
`;

const StyledApp = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
`;

class App extends React.Component {
  state = {
    isLoading: false,
    usdInput: 10.00.toFixed(2), // set default to 10.00!
    exchangeRates: [],
    currencyList: ['IDR', 'GBP', 'EUR'] // default/initial display list
  };

  // Get data from API on mount
  async componentDidMount() {
    try {
      this.setState({
        isLoading: true
      });
      const res = await axios.get(url); // Fetch the data from API
      this.setState({
        isLoading: false,
        exchangeRates: res.data.rates
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false
      })
    }
  }

  onUSDChange = e => {
    this.setState({
      usdInput: e.target.value
    });
  };

  // Add the selected currency
  onAddClick = selectedCurrency => {
    // check if a currency is selected
    if (!selectedCurrency) {
      alert('please select a currency to add');
    } else if (this.state.currencyList.indexOf(selectedCurrency) === -1) {
      // add selected currency to the list if it's not on the list yet
      this.setState(prevState => ({
        currencyList: [...prevState.currencyList, selectedCurrency]
      }));
    } else {
      alert('The currency you selected is already on the list');
    }
  };

  // Remove specified currency from the list of displayed currencies
  onRemoveClick = currency => {
    this.setState({
      currencyList: this.state.currencyList.filter(c => c !== currency)
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
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
      </>
    );
  }
}

export default App;
