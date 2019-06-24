import React from 'react';

class Button extends React.PureComponent {
  render() {
    const { className, onClick, label } = this.props;
    return (<button className={ className } onClick={onClick}>{label}</button>);
  }
}

export default Button;
