import { calculateNextPosition } from '../utils/formulas';

const moveBalls = (ballContext) => {
    const cannonBalls = [...ballContext.balls];

    const filterBalls = cannonBalls.filter(cannonBall => (
        cannonBall.position.y > -800 && cannonBall.position.x > -500 && cannonBall.position.x < 500
    ));

    const newBallPosition = filterBalls.map(cannonBall => {
        const { x, y } = cannonBall.position;
        const { angle, shootStatus } = cannonBall;
        if (shootStatus) {
            const newPosition = calculateNextPosition(x, y, angle, 5);
            return {
                ...cannonBall,
                position: newPosition
            };   
        } else {
            return {
                ...cannonBall,
            }
        }
        
    });


    ballContext.setBallContextState(newBallPosition);
};
  
  export default moveBalls;
