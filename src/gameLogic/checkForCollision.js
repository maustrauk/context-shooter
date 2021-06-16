import { traceCross } from '../utils/formulas';

const checkForCollision = (movingBallsContext, flyingObjectContext) => {
    const { flyingObjects } = flyingObjectContext;
    const { movingBalls } = movingBallsContext;

    movingBalls.forEach(movingBall => {
        flyingObjects.forEach(flyingObject => {
            //const tracesObject = traceCross(flyingObject.position, , movingBall.startPosition, movingBall.endPosition);
        });
    });
};

export default checkForCollision;