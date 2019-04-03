import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Title from './Title';
import BaseCurrency from './BaseCurrency';
import CurrencyList from './CurrencyList';
import AddCurrency from './AddCurrency';

const url = 'https://api.exchangeratesapi.io/latest?base=USD';

const StyledApp = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
`;

class App extends React.Component {
  state = {
    isLoading: false,
    usdInput: 10.0,
    exchangeRates: [],
    currencyList: ['IDR']
  };

  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    const res = await axios.get(url);
    console.log(res.data);
    this.setState({
      isLoading: false,
      exchangeRates: res.data.rates
    });
  }

  onInputChange = e => {
    this.setState({
      usdInput: e.target.value
    });
  };

  onAddClick = value => {
    console.log(value);
    if (this.state.currencyList.indexOf(value) === -1) {
      this.setState(prevState => ({
        currencyList: [...prevState.currencyList, value]
      }));
    } else {
      alert('currency is already on the list');
    }
  };

  render() {
    return (
      <StyledApp>
        <Title />
        <BaseCurrency
          usdInput={this.state.usdInput}
          onInputChange={this.onInputChange}
        />
        {this.state.isLoading ? (
          <div>Loading</div>
        ) : (
          <CurrencyList
            currencyList={this.state.currencyList}
            exchangeRates={this.state.exchangeRates}
            usdInput={this.state.usdInput}
          />
        )}
        <AddCurrency onAddClick={this.onAddClick} />
      </StyledApp>
    );
  }
}

export default App;
