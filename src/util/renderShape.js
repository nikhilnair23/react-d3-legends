import React from 'react';
import ShapeRect from '../shapes/Rect';
import ShapeCircle from '../shapes/Circle';

import ShapeTriangleUp from '../shapes/TriangleUp';
import ShapeTriangleDown from '../shapes/TriangleDown';
import ShapeDiamond from '../shapes/Diamond';
import ShapeCross from '../shapes/cross';

import valueOrIdentity from './valueOrIdentity';

export default function renderShape({
  shape = 'rect',
  fill = valueOrIdentity,
  size = valueOrIdentity,
  width,
  height,
  label,
  shapeStyle = x => undefined,
}) {
  const props = {
    width,
    height,
    label,
    fill: fill({ ...label }),
    size: size({ ...label }),
    style: shapeStyle({ ...label }),
  };
  if (typeof shape === 'string') {
    if (shape === 'rect' || shape=== "square") {
      return <ShapeRect {...props} />;
    } else if(shape === "triangle-up") {
      return <ShapeTriangleUp {...props} />
    } else if(shape === "triangle-down") {
      return <ShapeTriangleDown {...props} />
    } else if(shape === "diamond") {
      return <ShapeDiamond {...props} />
    } else if(shape === "cross") {
      return <ShapeCross {...props} />
    }
    return <ShapeCircle {...props} />;
  }
  if (React.isValidElement(shape)) {
    return React.cloneElement(shape, props);
  }
  return React.createElement(shape, props);
}
