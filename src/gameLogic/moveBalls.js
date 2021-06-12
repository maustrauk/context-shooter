

const moveBalls = (movingBallsContext, staticBallContext, mousePosition) => {

  const staticBall = {...staticBallContext.ball};

  const newBall = {
    startPosition: staticBall.position,
    endPosition: mousePosition,
    renderStatus: true,
  }
  const movingBalls = [...movingBallsContext.movingBalls, newBall];

  const filteredBalls = movingBalls.filter(ball => ball.renderStatus);

  return movingBallsContext.setMovingBallsContextState(filteredBalls);
};
  
  export default moveBalls;
