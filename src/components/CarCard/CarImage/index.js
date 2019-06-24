import React from 'react';

class CarImage extends React.PureComponent {
  render() {
    const { data } = this.props;
    const url = data !== undefined ? data.img : 'testUrl';
    return (
        <div
            className="car-img"
            style={{ background: `url(${url}) center / cover` }}
        ></div>
    );
  }
}

export default CarImage;
