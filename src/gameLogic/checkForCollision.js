import { traceCross } from '../utils/formulas';

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
        const tracesObject = traceCross(arr[0].targetStartPos, arr[0].targetEndPos, arr[1].ballStartPos, arr[1].ballEndPos);
        if (Object.keys(tracesObject).length !== 0) {
            crossingObject = {...tracesObject};
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

            const crossPoint = traceChecker(initialValues);
            if (Object.keys(crossPoint).length !== 0) {
                console.log("Hit");
            }
        });
    });
};

export default checkForCollision;