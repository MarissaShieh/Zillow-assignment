import React from 'react';

class SideArrow extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <i className={`fas fa-arrow-circle-${this.props.side}`}></i>
    )
  }
}

export default SideArrow;