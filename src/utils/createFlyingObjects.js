import { createInterval, flyingObjectsStarterYAxis, maxFlyingObjects, flyingObjectsStarterPositions } from './constants';

const createFlyingObjects = (gameStarted, flyingObjectsContext) => {

    const { flyingObjects, lastObjectCreatedAt, setLastObjectCreatedAt} = flyingObjectsContext;

    if (! gameStarted ) return flyingObjects;

    const now = (new Date()).getTime();

    const createNewObject = ((now - lastObjectCreatedAt) > createInterval && flyingObjects.length < maxFlyingObjects);


    if (! createNewObject) return flyingObjects;

    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);

    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];

    const newFlyingObject = {
        position: {
          x: flyingObjectPosition,
          y: flyingObjectsStarterYAxis,
        },
        createdAt: now
    };

    setLastObjectCreatedAt(now);

    flyingObjects.push(newFlyingObject)

    return flyingObjects;

}

export default createFlyingObjects;