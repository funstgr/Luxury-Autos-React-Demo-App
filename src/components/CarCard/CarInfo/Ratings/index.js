import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import RatingsStars from './RatingStars';

class Ratings extends React.PureComponent {
  render() {
    const { data } = this.props;
    const stars = [];
    // build stars array of five stars based on # stars in data
    if (data !== undefined) {
      for (let i = 0; i < 5; i++) {
        let enabled = false;
        if (data.stars > i) {
          enabled = true;
        }
        stars.push(<RatingsStars key={i} enabled={enabled}/>);
      }
    }

    return (
      <div className='ratings-container'>
            Rating: {stars}
      </div>
    );
  }
}

Ratings.propTypes = {
  data: PropTypes.object,
};

export default Ratings;
