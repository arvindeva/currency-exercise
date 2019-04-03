import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import BaseCurrency from './BaseCurrency';
import CurrencyList from './CurrencyList';

const StyledApp = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
`;

class App extends React.Component {
  state = {
    isLoading: false
  };

  render() {
    return (
      <StyledApp>
        <Title />
        <BaseCurrency />
        <CurrencyList />
      </StyledApp>
    );
  }
}

export default App;
