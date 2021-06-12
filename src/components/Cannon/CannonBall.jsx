import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { gameHeight } from '../../utils/constants';

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${-gameHeight}px);
  }
`;

const cssAnimation = (props) => {
  return css`animation: ${moveVertically} 4s linear`;
}

const MoveElipse = styled.ellipse`
${props => props.activeAnimation && cssAnimation()}`;

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
};

export default CannonBall;