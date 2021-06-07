import { calculateStartPosition } from './formulas';

const staticBalls = (ballContext, angel) => {
    const cannonBalls = [...ballContext.balls];

    const newBallPosition = cannonBalls.map(cannonBall => {
        const newPosition = calculateStartPosition(angel, 100);
        return {
            ...cannonBall,
            position: newPosition
        };
    });


    ballContext.setBallContextState(newBallPosition);
};
  
  export default staticBalls;
