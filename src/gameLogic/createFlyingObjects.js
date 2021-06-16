import { createInterval, flyingObjectsStarterYAxis, maxFlyingObjects, flyingObjectsStarterPositions, gameHeight } from '../utils/constants';
import deleteFlyingObject from './deleteFlyingObject';

const createFlyingObjects = (flyingObjectsContext) => {

    const now = (new Date()).getTime();

    const createNewObject = ((now - flyingObjectsContext.lastObjectCreatedAt) > createInterval && flyingObjectsContext.flyingObjects.length < maxFlyingObjects);


    if (! createNewObject) return deleteFlyingObject(flyingObjectsContext);

    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);

    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];

    const newFlyingObject = {
      startPosition: {
          x: flyingObjectPosition,
          y: flyingObjectsStarterYAxis,
        },
        endPosition: {
          x: 0,
          y: gameHeight,
        },
        createdAt: now
    };


    const updatedFlyingObjects = [...flyingObjectsContext.flyingObjects, newFlyingObject];

    return flyingObjectsContext.setFlyingObjectContext(updatedFlyingObjects, now);

}

export default createFlyingObjects;