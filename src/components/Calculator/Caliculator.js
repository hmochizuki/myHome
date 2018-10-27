import React, { Component } from 'react';

import Result from '../Result'
import NumBtn from '../NumBtn'
import OperaorBtn from '../OperaorBtn'

class Calculator extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div style={{textAlign:"center"}}>
        <Result result={ calculator.curNumber} maxLength={5}/>
        <div>
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
          <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
        </div>
        <div>
          <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
          <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
          <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
        </div>
        <div>
          <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
          <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
          <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
        </div>
        <div>
          <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
          <OperaorBtn writing='+' onClick={actions.onPlusClick} />
          <OperaorBtn writing='-' onClick={actions.onMinusClick} />
          <OperaorBtn writing='C' onClick={actions.onClearClick} />
          <OperaorBtn writing='=' onClick={actions.onEqualClick} />
        </div>
      </div>
    );
  }
}

export default Calculator
