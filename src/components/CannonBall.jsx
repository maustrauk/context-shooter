import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { gameHeight } from '../utils/constants';

import { StartPositionBallContext } from '../contexts/gameContext';

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${-gameHeight}px);
  }
`;


const MoveElipse = styled.ellipse`
${props => props.activeAnimation && css`
  animation: ${props.moveVertically} 4s linear;
`}
`;

const CannonBall = (props) => {

  const { shootStatus } = useContext(StartPositionBallContext);

  const ballStyle = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };

  return (
    <MoveElipse
      activeAnimation={shootStatus}
      moveVertically={moveVertically}
      style={ballStyle}
      cx={props.position.x}
      cy={props.position.y}
      rx="16"
      ry="16"
    />
  );
};

CannonBall.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default CannonBall;