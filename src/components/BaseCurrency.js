import React from 'react';
import styled from 'styled-components';

const StyledBaseCurrency = styled.div.attrs({
  className: 'ui segment'
})`
  span {
    color: red;
    cursor: pointer;
  }
`;

class BaseCurrency extends React.Component {
  state = {
    showInputForm: false
  };

  onEditClick = () => {
    this.setState({
      showInputForm: true
    });
  };

  onCloseClick = () => {
    this.setState({
      showInputForm: false
    });
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.props.onInputChange(e);
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      showInputForm: false
    });
  };

  render() {
    return (
      <StyledBaseCurrency>
        <h1>USD</h1>
        <p>
          {this.props.usdInput} -{' '}
          {!this.state.showInputForm ? (
            <span onClick={this.onEditClick}>Edit</span>
          ) : (
            <span onClick={this.onCloseClick}>Close</span>
          )}
        </p>
        {this.state.showInputForm && (
          <form className="ui form" onSubmit={this.onSubmit}>
            <div className="ui labeled input">
              <label htmlFor="amount" className="ui label">
                $
              </label>
              <input
                type="number"
                placeholder="usd"
                defaultValue={this.props.usdInput}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        )}
      </StyledBaseCurrency>
    );
  }
}

export default BaseCurrency;
