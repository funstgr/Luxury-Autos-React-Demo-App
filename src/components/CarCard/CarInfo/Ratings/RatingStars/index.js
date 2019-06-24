import React from 'react';

// Empty star: ☆
// Highlighted star: ★
class RatingsStars extends React.PureComponent {
  render() {
    const { enabled } = this.props;
    const star = enabled ? '★' : '☆';
    return <span>{star}</span>;
  }
}

export default RatingsStars;
