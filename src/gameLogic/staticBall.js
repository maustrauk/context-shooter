import { calculateStartPosition } from '../utils/formulas';

const staticBall = (ballContext, angel) => {
    const newPosition = calculateStartPosition(angel, 100);
    const cannonBall = {...ballContext.ball, position: newPosition};

    ballContext.setStartPositionBallContextState(cannonBall);
};
  
  export default staticBall;
