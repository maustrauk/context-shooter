import React from 'react';
import PropTypes from 'prop-types';

const FlyingObjectBase = (props) => {
  const style = {
    fill: '#979797',
    stroke: '#5c5c5c',
  };

  return (
    <ellipse
      cx={props.startPosition.x}
      cy={props.startPosition.y}
      rx="40"
      ry="10"
      style={style}
    />
  );
};

FlyingObjectBase.propTypes = {
  startPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObjectBase;