import React from 'react';
import { PointTarget } from 'react-point';
import './Calculator.css';


class CalculatorKey extends React.Component {
  render() {
    const { className, onPress, ...props } = this.props

    return (
      <PointTarget component="button" className={`calculator-key ${className}`} onPoint={onPress}>
        <div {...props}/>
      </PointTarget>
    )
  }
}
export default CalculatorKey;
