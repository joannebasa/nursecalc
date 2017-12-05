import React from 'react';
import './Calculator.css';

class KeyboardInput extends React.Component {
  handleKeyDown = (event) => {
    if (this.props.onKeyDown)
      this.props.onKeyDown(event)
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return null
  }
}
export default KeyboardInput;
