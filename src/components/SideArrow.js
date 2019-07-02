import React from 'react';

class SideArrow extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { side, updateDisplay } = this.props;
    updateDisplay(side);
  }

  render() {
    return (
      <i className={`fas fa-arrow-circle-${this.props.side}`} onClick={this.handleClick} />
    )
  }
}

export default SideArrow;