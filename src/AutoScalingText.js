import React from 'react';
import ReactDOM from 'react-dom';

class AutoScalingText extends React.Component {
  state = {
    scale: 1
  };

  componentDidUpdate() {
    const { scale } = this.state

    const node = ReactDOM.findDOMNode(this)
    const parentNode = node.parentNode

    const availableWidth = parentNode.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = availableWidth / actualWidth

    if (scale === actualScale)
      return

    if (actualScale < 1) {
      this.setState({ scale: actualScale })
    } else if (scale < 1) {
      this.setState({ scale: 1 })
    }
  }

  render() {
    const { scale } = this.state

    return (
      <div
        className="auto-scaling-text"
        style={{ transform: `scale(${scale},${scale})` }}
      >{this.props.children}</div>
    )
  }
}
export default AutoScalingText;
