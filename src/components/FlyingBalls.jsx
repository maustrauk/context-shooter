import React, { useContext } from 'react';

import { GameplayContext, MovingBallsContext } from '../contexts/gameContext';

import CannonBall from './Cannon/CannonBall';

const FlyingBalls = (props) => {

    const { startGame } = useContext(GameplayContext);
    const { movingBalls } = useContext(MovingBallsContext);

    return <g>
        {startGame ? 
            movingBalls.map((movingBall, id) => (<CannonBall key={`MovingBallId${id}`} position={movingBall.position}/>)) :
            null}
    </g>
};

export default FlyingBalls;