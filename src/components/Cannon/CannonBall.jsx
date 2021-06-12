import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flyingBallsAnimation } from '../../utils/animations';


const MoveElipse = styled.ellipse`
${props => props.activeAnimation && flyingBallsAnimation(props.endPosition)}`;

const CannonBall = (props) => {

  const ballStyle = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };


  return (
    <MoveElipse
      activeAnimation={props.shootStatus}
      style={ballStyle}
      endPosition={props.endPosition}
      cx={props.startPosition.x}
      cy={props.startPosition.y}
      rx="16"
      ry="16"
    />
  );
};

CannonBall.propTypes = {
  startPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  shootStatus: PropTypes.bool.isRequired,
  endPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default CannonBall;