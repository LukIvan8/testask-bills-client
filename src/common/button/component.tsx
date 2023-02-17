import React from 'react';
import {IonButton} from "@ionic/react";
import styled from "styled-components";
import {TextElem} from "../text-elem";

interface PropTypes {
  label:string
  fill?:string
  type?:string
}

const textColor = (type:string|undefined) => {
  switch (type){
    case "fill":
      return "#FFF";
    case undefined:
      return "#FFF";
    case "outline":
      return "#387ABB"
  }
}

const Component = (props:PropTypes) => {
  return (
    <Button type={props.type} fill={props.fill}>
      <TextElem color={textColor(props.fill)} tid={props.label}/>
    </Button>
  );
};

const Button = styled(IonButton)`
  width: 100%;
`

export default Component;