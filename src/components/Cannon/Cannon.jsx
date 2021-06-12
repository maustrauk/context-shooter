import React, { useContext } from 'react';

import { StartPositionBallContext } from '../../contexts/gameContext';

import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CannonBall from './CannonBall';

const Cannon = (props) => {

    const { ball } = useContext(StartPositionBallContext);

    const endPosition = {
        x: 0,
        y: 0,
    }

    return <g>
        {!ball.shootStatus ? <CannonBall startPosition={ball.position} endPosition={endPosition} shootStatus={false}/> : null}
        <CannonPipe/>
        <CannonBase/>
    </g>
};

export default Cannon;