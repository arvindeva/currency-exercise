import React from 'react';
import styled from 'styled-components';

const StyledBaseCurrency = styled.div.attrs({
  className: 'ui segment'
})`
  .ui .input input {
    text-align: right;
    font-size: 36px;
    font-weight: 600;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  p {
    font-style: italic;
  }

  span {
    color: red;
    cursor: pointer;
    text-align: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
`;

const BaseCurrency = props => {
  return (
    <StyledBaseCurrency>
      <p>USD - United States Dollars</p>
      <div className="header">
        <h1>USD</h1>
        <form className="ui form">
          <div className="ui massive transparent input">
            <input
              type="number"
              placeholder="Enter USD"
              value={props.usdInput}
              onChange={e => props.onUSDChange(e)}
            />
          </div>
        </form>
      </div>
    </StyledBaseCurrency>
  );
};

export default BaseCurrency;
