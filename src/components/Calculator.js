import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  state= {
    displayTextTop: "",
    displayTextBtm: "0",
  }

  handelBtnClick = (event) => {
    let newText = event.target.innerText
    if (this.state.displayTextBtm === "0") {
      this.setState((prevState, props) => {
        return {
          displayTextBtm: newText
        };
      })
    }else {
      this.setState((prevState, props) => {
        return {
          displayTextBtm: prevState.displayTextBtm + newText
        };
      })
    }
  }

  handelEquals = (event) => {
    let newText = event.target.innerText
    let total = eval(this.state.displayTextBtm)
    if (this.state.displayTextBtm === "0") {
      this.setState((prevState, props) => {
        return {
          displayTextBtm: ""
        };
      })
    }else {
      this.setState((prevState, props) => {
        return {
          displayTextTop: prevState.displayTextBtm + newText,
          displayTextBtm: total
        };
      })
    }
    console.log(this.state.displayTextBtm);
  }

  handelClear = () => {
    this.setState((prevState, props) => {
      return {
        displayTextTop: "",
        displayTextBtm: "0"
      };
    })
  }

  render(){
    const CLEAR = "CLEAR";
    const NEGPOS = "+/-";
    const PERCENT = "%";
    const DIVIDE = "/";
    const OPENPAREN = "(";
    const SEVEN = "7"
    const EIGHT = "8"
    const NINE = "9"
    const TIMES = "*"
    const CLOSEPAREN = ")"
    const FOUR = "4"
    const FIVE = "5"
    const SIX = "6"
    const MINUS = "-"
    const EXPONENT = "^"
    const ONE = "1"
    const TWO = "2"
    const THREE = "3"
    const PLUS = "+"
    const SQRT = "√"
    const DECIMAL = "."
    const ZERO = "0"
    const EQUALS = "="
    console.log(this.state);
    return (
      <div className="Calculator">
        <div className="Display">
          <div className="TopDisplay">{this.state.displayTextTop}</div>
          <div className="BtmDisplay">{this.state.displayTextBtm}</div>
        </div>
        <div className="Buttons">
          <div className="ButtonContainer">
            <div
              onClick={this.handelClear}
              className="btn clear">{CLEAR}
            </div>
            <div className="btn negpos">{NEGPOS}</div>
            <div
              onClick={this.handelBtnClick}
              className="btn percent">{PERCENT}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn divide">{DIVIDE}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn openparen">{OPENPAREN}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn seven">{SEVEN}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn eight">{EIGHT}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn nine">{NINE}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn times">{TIMES}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn closeparen">{CLOSEPAREN}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn four">{FOUR}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn five">{FIVE}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn six">{SIX}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn minus">{MINUS}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn exponent">{EXPONENT}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn one">{ONE}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn two">{TWO}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn three">{THREE}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn plus">{PLUS}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn sqrt">{SQRT}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn decimal">{DECIMAL}
            </div>
            <div
              onClick={this.handelBtnClick}
              className="btn zero">{ZERO}
            </div>
            <div
              onClick={this.handelEquals}
              className="btn equals">{EQUALS}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
