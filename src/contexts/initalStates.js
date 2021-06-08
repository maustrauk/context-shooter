export const AngleInitState = {
    angle: 0,
  };
  
export  const StartPositionBallInitState = {
    balls: [
      {
        position: {
          x: 0,
          y: -100,
        },
        id: 0,
        angle: 0,
        shootStatus: false,
        shootingAnimation: {
          x: 0,
          y: 0,
        },
      },
    ]
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
  