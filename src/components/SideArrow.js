import React from 'react';

class SideArrow extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { side, updateDisplay, currentIndex, indexOfLastPhoto } = this.props;
    let newIndex = 0;
    if (side === "left") {
      newIndex = (currentIndex === 0)? indexOfLastPhoto: currentIndex - 1;
    } else if (side === "right") {
      newIndex = (currentIndex === indexOfLastPhoto)? 0: currentIndex + 1;
    }
    updateDisplay(newIndex);
  }

  render() {
    return (
      <i className={`fas fa-arrow-circle-${this.props.side}`} onClick={this.handleClick} />
    )
  }
}

export default SideArrow;