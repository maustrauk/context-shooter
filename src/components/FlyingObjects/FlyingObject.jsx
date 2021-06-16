import React from 'react';
import PropTypes from 'prop-types';
import FlyingObjectBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';
import styled from 'styled-components';

import { flyingObjectsAnimation } from '../../utils/animations';


const Move = styled.g`
  ${props => flyingObjectsAnimation(props.endPosition)}
`;

const FlyingObject = props => (
  <Move endPosition={props.endPosition}>
    <FlyingObjectBase startPosition={props.startPosition} />
    <FlyingObjectTop startPosition={props.startPosition} />
  </Move>
);

FlyingObject.propTypes = {
  startPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  endPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject;