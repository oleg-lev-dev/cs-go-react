import React from 'react';

function Icon({path, width, height, viewBox, fill = '#fff'}) {
  return (
    <svg id="SVGDoc" width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1"
         viewBox={viewBox}>
      <g>
        <path
          d={path}
          fill={fill}
          fill-opacity="1"></path>
      </g>
    </svg>
  );
}

export default Icon;