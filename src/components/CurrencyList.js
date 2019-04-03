import React from 'react';
import Currency from './Currency';

const CurrencyList = props => {

  return (
    <div>
      {props.currencyList.map(currency => (
        <Currency
          key={currency}
          currency={currency}
          exchangeRate={props.exchangeRates[currency]}
          usdInput={props.usdInput}
          onRemoveClick={props.onRemoveClick}
        />
      ))}
    </div>
  );
};

export default CurrencyList;
