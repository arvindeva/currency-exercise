import React from 'react';
import Currency from './Currency';

const CurrencyList = ({ currencyList, exchangeRates, usdInput }) => {
  return (
    <div>
      {currencyList.map(currency => (
        <Currency
          key={currency}
          currency={currency}
          exchangeRate={exchangeRates[currency]}
          usdInput={usdInput}
        />
      ))}
    </div>
  );
};

export default CurrencyList;
