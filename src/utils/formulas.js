export const pathFromBezierCurve = (cubicBezierCurve) => {
    const {
      initialAxis, initialControlPoint, endingControlPoint, endingAxis,
    } = cubicBezierCurve;
    return `
      M${initialAxis.x} ${initialAxis.y}
      c ${initialControlPoint.x} ${initialControlPoint.y}
      ${endingControlPoint.x} ${endingControlPoint.y}
      ${endingAxis.x} ${endingAxis.y}
    `;
  };

export const radiansToDegrees = radians => ((radians * 180) / Math.PI);

export const calculateAngle = (x1, y1, x2, y2) => {
  
    const dividend = y2 - y1;
    const divisor = x2 - x1;
    const quotient = dividend / divisor;
    const result = radiansToDegrees( Math.atan(quotient)) - 90 ;
    if (x2 >= x1) {
      return result;
    } else {
      return result + 180;
    }
  };

export const degreesToRadian = degrees => ((degrees * Math.PI) / 180);

export const calculateStartPosition = (angle, hight) => {
    const ajustAngle = angle - 270;
    const x = - hight * Math.cos(degreesToRadian(ajustAngle));
    const y = - hight * Math.sin(degreesToRadian(ajustAngle));

    return {
      x: x,
      y: y,
    }
  };

export const vectorCross = (xA, yA, xB, yB) => {
  const angle = Math.acos(xA * xB + yA * yB);
  const moduleA = Math.sqrt(xA * xA + yA * yA);
  const moduleB = Math.sqrt(xB * xB + yB * yB);

  return moduleA * moduleB * Math.sin(angle);
}

export const traceCross = (targetStartPos, targetEndPos, ballStartPos, ballEndPos) => {
  const A = targetStartPos;
  const B = targetEndPos;
  const C = ballStartPos;
  const D = ballEndPos;

  const AB = {
    x: B.x - A.x,
    y: B.y - A.y,
  }

  const AC = {
    x: C.x - A.x,
    y: C.y - A.y,
  }

  const AD = {
    x: D.x - A.x,
    y: D.y - A.y,
  }

  const CD = {
    x: D.x - C.x,
    y: D.y - C.y,
  }

  const CB = {
    x: B.x - C.x,
    y: B.y - C.y,
  }

  const CA = {
    x: A.x - C.x,
    y: A.y - C.y,
  }

  const Z1 = vectorCross(AB.x, AB.y, AC.x, AC.y);
  const Z2 = vectorCross(AB.x, AB.y, AD.x, AD.y);
  
  if (Math.sign(Z1) === Math.sign(Z2)) {
    return {};
  }

  const Z3 = vectorCross(CD.x, CD.y, CB.x, CB.y);
  const Z4 = vectorCross(CD.x, CD.y, CA.x, CA.y);

  if (Math.sign(Z3) === Math.sign(Z4)) {
    return {};
  }

  return {
    x: C.x + (D.x - C.x) * Math.abs(Z1) / Math.abs(Z2 - Z1),
    y: C.y + (D.y - C.y) * Math.abs(Z1) / Math.abs(Z2 - Z1),
  }


}