import React from 'react';

const LogoSVG = ({dotsColor}) =>{
  const circleRadius = "2.5%";

  return (
      <svg width="50%" height="100%" id="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-12 -4 100 100" preserveAspectRatio="none">
        <g>
          {/*col-1*/}
          <circle className="circle2 outer" cx="2.5%" cy="25%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle1 outer" cx="2.5%" cy="45%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle outer" cx="2.5%" cy="65%" r={circleRadius} fill={dotsColor}/>
          {/*col-2*/}
          <circle className="circle outer" cx="20%" cy="14%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle1" cx="20%" cy="35%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle" cx="20%" cy="55%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle2 outer" cx="20%" cy="76%" r={circleRadius} fill={dotsColor}/>
          {/*col-3*/}
          <circle className="circle outer" cx="37.5%" cy="5%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle1" cx="37.5%" cy="25%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle" cx="37.5%" cy="45%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle2" cx="37.5%" cy="65%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle outer" cx="37.5%" cy="85%" r={circleRadius} fill={dotsColor}/>
          {/*col-4*/}
          <circle className="circle outer" cx="55%" cy="14%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle1" cx="55%" cy="35%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle2" cx="55%" cy="55%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle outer" cx="55%" cy="76%" r={circleRadius} fill={dotsColor}/>
          {/*col-5*/}
          <circle className="circle1 outer" cx="72.5%" cy="25%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle outer" cx="72.5%" cy="45%" r={circleRadius} fill={dotsColor}/>
          <circle className="circle2 outer" cx="72.5%" cy="65%" r={circleRadius} fill={dotsColor}/>
        </g>
        {/*lines | starting from center*/}
        <path className="line" d="M 37.5 45 L 20 55 L 20 35 L 37.5 25  L 55 35 L 55 55 L 37.5 65"
              stroke={dotsColor}
              fill="rgba(0,0,0,0)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"/>
      </svg>
  )
};

export default LogoSVG;