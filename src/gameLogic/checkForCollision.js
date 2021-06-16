import { traceCross, timeCross } from '../utils/formulas';

const traceChecker = (initialValues) => {
    const delta = 10;

    const targetBorderX1 =  {
        targetStartPos: {...initialValues.targetStartPos, x: initialValues.targetStartPos.x + delta},
        targetEndPos: {...initialValues.targetEndPos, x: initialValues.targetEndPos.x + delta},
    };

    const targetBorderX2 =  {
        targetStartPos: {...initialValues.targetStartPos, x: initialValues.targetStartPos.x - delta},
        targetEndPos: {...initialValues.targetEndPos, x: initialValues.targetEndPos.x - delta},
    };
    const targetBorderY1 =  {
        targetStartPos: {...initialValues.targetStartPos, y: initialValues.targetStartPos.y + delta},
        targetEndPos: {...initialValues.targetEndPos, y: initialValues.targetEndPos.y + delta},
    };

    const targetBorderY2 =  {
        targetStartPos: {...initialValues.targetStartPos, y: initialValues.targetStartPos.y - delta},
        targetEndPos: {...initialValues.targetEndPos, y: initialValues.targetEndPos.y - delta},
    };

    const ballBorderX1 =  {
        ballStartPos: {...initialValues.ballStartPos, x: initialValues.ballStartPos.x + delta},
        ballEndPos: {...initialValues.ballEndPos, x: initialValues.ballEndPos.x + delta},
    };

    const ballBorderX2 =  {
        ballStartPos: {...initialValues.ballStartPos, x: initialValues.ballStartPos.x - delta},
        ballEndPos: {...initialValues.ballEndPos, x: initialValues.ballEndPos.x - delta},
    };
    const ballBorderY1 =  {
        ballStartPos: {...initialValues.ballStartPos, y: initialValues.ballStartPos.y + delta},
        ballEndPos: {...initialValues.ballEndPos, y: initialValues.ballEndPos.y + delta},
    };

    const ballBorderY2 =  {
        ballStartPos: {...initialValues.ballStartPos, y: initialValues.ballStartPos.y - delta},
        ballEndPos: {...initialValues.ballEndPos, y: initialValues.ballEndPos.y - delta},
    };

    const traceArray = [
        [targetBorderX1, ballBorderX2],
        [targetBorderY1, ballBorderY2],
        [targetBorderX2, ballBorderX1],
        [targetBorderY2, ballBorderY1],
    ];

    let crossingObject = {};

    traceArray.forEach((arr) => {
        const targetPos = arr[0];
        const ballPos = arr[1];
        const tracesObject = traceCross(targetPos.targetStartPos, targetPos.targetEndPos, ballPos.ballStartPos, ballPos.ballEndPos);
        if (Object.keys(tracesObject).length !== 0) {
            crossingObject = {crossPoint: tracesObject, targetPos: targetPos, ballPos: ballPos};
            return crossingObject;
        }
    });

    return crossingObject;
};

const checkForCollision = (movingBallsContext, flyingObjectContext) => {
    const { flyingObjects } = flyingObjectContext;
    const { movingBalls } = movingBallsContext;

    movingBalls.forEach(movingBall => {
        flyingObjects.forEach(flyingObject => {
            const initialValues = {
                targetStartPos:  flyingObject.startPosition,
                targetEndPos: flyingObject.endPosition,
                ballStartPos: movingBall.startPosition,
                ballEndPos: movingBall.endPosition,
            };

            const crossObject = traceChecker(initialValues);
            if (Object.keys(crossObject).length !== 0) {
                const lifeTime = timeCross(crossObject, 4000, 4000);
                if (lifeTime > 0) {
                    console.log(lifeTime);
                }
            }
        });
    });
};

export default checkForCollision;