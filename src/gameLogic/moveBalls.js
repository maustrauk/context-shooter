import { calculateStartPosition } from '../utils/formulas';
import { gameHeight } from '../utils/constants';

const moveBalls = (movingBallsContext, staticBallContext, angleContext) => {

  const staticBall = {...staticBallContext.ball};

  const newBall = {
    startPosition: staticBall.position,
    endPosition: calculateStartPosition(angleContext.angle, gameHeight),
    renderStatus: true,
  }
  const movingBalls = [...movingBallsContext.movingBalls, newBall];

  const filteredBalls = movingBalls.filter(ball => ball.renderStatus);

  return movingBallsContext.setMovingBallsContextState(filteredBalls);
};
  
  export default moveBalls;
