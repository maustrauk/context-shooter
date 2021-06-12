

const moveBalls = (movingBallsContext, staticBallContext, mousePosition) => {

  const staticBall = {...staticBallContext.ball};

  const newBall = {
    startPosition: staticBall.position,
    endPostition: mousePosition,
  }
  const movingBalls = [...movingBallsContext.movingBalls, newBall];

  console.log(movingBalls);

  return movingBallsContext.setMovingBallsContextState(movingBalls);
};
  
  export default moveBalls;
