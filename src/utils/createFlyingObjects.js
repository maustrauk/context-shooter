import { createInterval, flyingObjectsStarterYAxis, maxFlyingObjects, flyingObjectsStarterPositions } from './constants';

const createFlyingObjects = (gameStarted, flyingObjectsContext) => {

    if (! gameStarted ) return ;

    const now = (new Date()).getTime();

    const createNewObject = ((now - flyingObjectsContext.lastObjectCreatedAt) > createInterval && flyingObjectsContext.flyingObjects.length < maxFlyingObjects);


    if (! createNewObject) return ;

    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);

    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];

    const newFlyingObject = {
        position: {
          x: flyingObjectPosition,
          y: flyingObjectsStarterYAxis,
        },
        createdAt: now
    };


    const updatedFlyingObjects = [...flyingObjectsContext.flyingObjects, newFlyingObject];

    return flyingObjectsContext.setFlyingObjectContext(updatedFlyingObjects, now);

}

export default createFlyingObjects;