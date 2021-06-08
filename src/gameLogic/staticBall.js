import { calculateStartPosition } from '../utils/formulas';

const staticBall = (ballContext, angel) => {
    const cannonBalls = [...ballContext.balls];

    const filteredBalls = cannonBalls.filter(ball => (!ball.shootStatus));

    const newBallPosition = filteredBalls.map(cannonBall => {
        const newPosition = calculateStartPosition(angel, 100);
        return {
            ...cannonBall,
             position: newPosition
        };
    });


    ballContext.setStartPositionBallContextState(newBallPosition);
};
  
  export default staticBall;
