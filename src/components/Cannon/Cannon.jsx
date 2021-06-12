import React, { useContext } from 'react';

import { StartPositionBallContext } from '../../contexts/gameContext';

import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CannonBall from './CannonBall';

const Cannon = (props) => {

    const { balls } = useContext(StartPositionBallContext);

    return <g>
        {balls.map((ball, id) => (<CannonBall key={`StartBallId${id}`} startPosition={ball.position} shootStatus={false}/>))}
        <CannonPipe/>
        <CannonBase/>
    </g>
};

export default Cannon;