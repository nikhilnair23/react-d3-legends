import React from 'react';

export default function ShapeDiamond ({ fill, width, height, style }) {
  if (typeof width === 'string') width = 0;
  if (typeof height === 'string') height = 0;
  const size = Math.max(width, height);
  return (
    <svg width={width} height={size} x="0px" y="0px" viewBox="0 0 512 512">
      <path d="M256,0L96,256l160,256l160-256L256,0z" fill={fill}/>
    </svg>
  );
}
