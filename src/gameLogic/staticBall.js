import { calculateStartPosition } from '../utils/formulas';

const staticBall = (ballContext, angel) => {
    const cannonBalls = [...ballContext.balls];

    const newBallPosition = cannonBalls.map(cannonBall => {
        if (cannonBall.shootStatus) {
            return {...cannonBall};
        } else {
            const newPosition = calculateStartPosition(angel, 100);
            return {
                ...cannonBall,
                position: newPosition
            };
        }
    });


    ballContext.setStartPositionBallContextState(newBallPosition);
};
  
  export default staticBall;
