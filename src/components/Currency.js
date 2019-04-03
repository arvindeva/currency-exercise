import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const StyledCurrency = styled.div.attrs({
  className: 'ui segment'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .minus {
    cursor: pointer;
  }
`;

const Currency = props => {
  return (
    <StyledCurrency>
      <div className="left">
        <h1>
          {props.currency} - {(props.usdInput * props.exchangeRate).toFixed(4)}
        </h1>
        <p>
          1 USD ={' '}
          {props.exchangeRate !== undefined
            ? props.exchangeRate.toFixed(4)
            : 'asd'}{' '}
          {props.currency}
        </p>
      </div>
      <div className="right">
        <Icon
          className="minus"
          name="minus square outline"
          onClick={() => props.onRemoveClick(props.currency)}
        />
      </div>
    </StyledCurrency>
  );
};

export default Currency;
