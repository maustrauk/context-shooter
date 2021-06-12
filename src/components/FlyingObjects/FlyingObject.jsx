import React from 'react';
import PropTypes from 'prop-types';
import FlyingObjectBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';
import styled from 'styled-components';

import { flyingObjectsAnimation } from '../../utils/animations';


const Move = styled.g`
  ${flyingObjectsAnimation()}
`;

const FlyingObject = props => (
  <Move>
    <FlyingObjectBase position={props.position} />
    <FlyingObjectTop position={props.position} />
  </Move>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject;