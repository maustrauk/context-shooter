import React, { useContext } from 'react';
import { pathFromBezierCurve } from '../../utils/formulas';
import { AngleContext } from '../../contexts/gameContext';

const CannonPipe = (props) => {
  const cannonPipeStyle = {
    fill: '#999',
    stroke: '#666',
    strokeWidth: '2px',
  };

  const { angle } = useContext(AngleContext);

  const transform = `rotate(${angle}, 0, 0)`;

  const muzzleWidth = 40;
  const halfMuzzle = muzzleWidth / 2;
  const height = 100;
  const yBasis = 70;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfMuzzle,
      y: -yBasis,
    },
    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },
    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },
    endingAxis: {
      x: muzzleWidth,
      y: 0,
    },
  };

  return (
    <g transform={transform}>
      <path
        style={cannonPipeStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfMuzzle}
        y1={-yBasis}
        x2={halfMuzzle}
        y2={-yBasis}
        style={cannonPipeStyle}
      />
    </g>
  );
};

export default CannonPipe;