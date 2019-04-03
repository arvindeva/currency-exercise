import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import currencyNames from '../lib/currencyNames';

const StyledCurrency = styled.div.attrs({
  className: 'ui segment'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 100%;
    .top {
      display: flex;
      justify-content: space-between;
      margin-right: 20px;
    }
    .middle {
      font-style: italic;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .bottom {
      font-style: italic;
    }
  }

  .minus {
    cursor: pointer;
  }
`;

const Currency = props => {
  // Formatting to add commas every 3 digits.
  const formatMoney = money => {
    return money.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  };

  return (
    <StyledCurrency>
      <div className="left">
        <div className="top">
          <div>
            <h1>{props.currency}</h1>
          </div>
          <div>
            <h1> {formatMoney(props.usdInput * props.exchangeRate)}</h1>
          </div>
        </div>
        <div className="middle">
          <p>
            {props.currency} - {currencyNames[props.currency]}
          </p>
        </div>
        <div className="bottom">
          <p>
            1 USD ={' '}
            {props.exchangeRate !== undefined && props.exchangeRate.toFixed(2)}{' '}
            {props.currency}
          </p>
        </div>
      </div>
      <div className="right">
        <Icon
          className="minus"
          name="minus square outline"
          size="big"
          onClick={() => props.onRemoveClick(props.currency)}
        />
      </div>
    </StyledCurrency>
  );
};

export default Currency;
