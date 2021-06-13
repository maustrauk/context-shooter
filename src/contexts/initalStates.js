export const AngleInitState = {
    angle: 0,
  };
  
export  const StartPositionBallInitState = {
    ball: 
      {
        position: {
          x: 0,
          y: -100,
        },
        shootStatus: false,
      },   
  };

export const MovingBallsInitState = {
  movingBalls: [
    {
      startPosition: {
        x: 0,
        y: 0,
      },
      endPosition: {
        x: 0,
        y: 0,
      },
      createdAt: (new Date()).getTime(),
      liveTime: 0,
      renderStatus: false,
    }
  ],
};
  
export const GameplayInitState = {
    kills: 0,
    lives: 0,
    startGame: false,
  };
  
export  const FlyingObjectInitState = {
    flyingObjects: [
        {
            position: {
                x: -150,
                y: -600
            },
            createdAt:  (new Date()).getTime()
        },
        {
            position: {
                x: 150,
                y: -600
            },
            createdAt:  (new Date()).getTime()
        }
    ],
    lastObjectCreatedAt:  (new Date()).getTime(),
  };
  