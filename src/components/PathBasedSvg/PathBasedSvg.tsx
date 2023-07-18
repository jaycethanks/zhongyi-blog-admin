import React, { FC, SVGProps, useEffect, useRef, useState } from 'react';

type Props = SVGProps<SVGElement>
const Button: FC<Props> = ({ children,...rest }) => {
  const { className, color, height, width,style } = rest
  const [viewBox,setViewBox] = useState('0 0 1024 1024')
  const pathRef = useRef<SVGPathElement>(null);
  useEffect(()=>{
    if(pathRef.current){
      const {x,y,width,height} =  pathRef.current.getBBox() as SVGRect
      setViewBox(`${x} ${y} ${width} ${height}`)
    }
  },[pathRef.current])
  return (
    <svg viewBox={viewBox} className={className} color={color} height={height} width={width} style={style}>
        {/* 绑定引用到 Path 元素上 */}
        {React.cloneElement(children as React.ReactElement, { ref: pathRef })}
    </svg>
  );
};

export default Button;