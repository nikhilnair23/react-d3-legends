import React from 'react';

export default function ShapeTriangleUp({ fill, width, height, style }) {
  if (typeof width === 'string') width = 0;
  if (typeof height === 'string') height = 0;
  const size = Math.max(width, height);
  return (
    <svg width={width} height={size} x="0px" y="0px"
      viewBox="0 0 490 490">
      <path d="M490,474.459H0L245.009,15.541L490,474.459z" fill={fill}/>
    </svg>
  );
}
