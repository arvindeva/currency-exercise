import React from 'react';

const Currency = props => {
  return (
    <div className="ui segment">
      <h1>{props.currency} - {props.usdInput * props.exchangeRate}</h1>
      <p>1 USD = {props.exchangeRate} {props.currency}</p>
    </div>
  );
};

export default Currency;
