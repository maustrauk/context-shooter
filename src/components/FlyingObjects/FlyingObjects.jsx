import React, { useContext } from 'react';

import FlyingObject from './FlyingObject';

import { GameplayContext, FlyingObjectContext } from '../../contexts/gameContext';

const FlyingObjects = (props) => {

    const { startGame } = useContext(GameplayContext);
    const { flyingObjects } = useContext(FlyingObjectContext);

    return (
        <g>
            {startGame ? 
            flyingObjects.map((flyingObject, id) => (<FlyingObject key={`FlyingObjectId${id}`} startPosition={flyingObject.startPosition} endPosition={flyingObject.endPosition}/>)) :
            null}
        </g>
    );
};

export default FlyingObjects;