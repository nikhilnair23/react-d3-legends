import React from 'react';

export default function ShapeTriangleDown ({ fill, width, height, style }) {
  if (typeof width === 'string') width = 0;
  if (typeof height === 'string') height = 0;
  const size = Math.max(width, height);
  return (
    <svg width={width} height={size} x="0px" y="0px"
      viewBox="0 0 490 490">
      <path d="M0,15.541h490L244.991,474.459L0,15.541z" fill={fill}/>
    </svg>
  );
}
