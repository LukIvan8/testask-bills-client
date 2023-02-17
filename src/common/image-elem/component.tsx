import React from 'react';

interface PropTypes {
  src:string;
  width?:number;
  height?:number;
}

const Component = (props:PropTypes) => {
  return (
    <img src={props.src} alt="alt" width={props.width} height={props.height}/>
  );
};

export default Component;