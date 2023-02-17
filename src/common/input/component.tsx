import React from 'react';
import {IonInput} from "@ionic/react";
import {TextElem} from "../text-elem";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

interface PropTypes {
  label?: string,
  placeholder?: string
  name?: string
  value?:string
  setFieldValue:Function
}



const Component = (props: PropTypes) => {


  const {t} = useTranslation()
  return (
      <div>
        <TextElem weight="bold" tid={props.label ? props.label : ""}/>
        <Input name={props.name} onChange={(e:any)=>props.setFieldValue(e.target.value)} value={props.value} placeholder={props.placeholder ? t(props.placeholder) : ""}>
        </Input>
      </div>
  )
};

const Input = styled(IonInput)`
  color: black;
  background-color: white;
  border-radius: 10px;
  --padding-start: 10px;
  --padding-top: 14px;
  --padding-bottom: 14px;
  font-size: 16px;
`

export default Component;