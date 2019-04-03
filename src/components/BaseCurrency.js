import React from 'react';
import styled from 'styled-components';

const StyledBaseCurrency = styled.div.attrs({
  className: 'ui segment'
})`
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

  .edit {
    display: flex;
    justify-content: flex-end;
  }
`;

const BaseCurrency = props => {

  const onUSDChange = e => props.onUSDChange(e);

  return (
    <StyledBaseCurrency>
      <p>USD - United States Dollar</p>
      <div className="header">
        <h1>USD</h1>
        <form className="ui form">
          <div className="ui huge transparent input">
            <input
              type="number"
              placeholder="usd"
              value={props.usdInput}
              onChange={onUSDChange}
            />
          </div>
        </form>
      </div>
    </StyledBaseCurrency>
  );
};

export default BaseCurrency;
