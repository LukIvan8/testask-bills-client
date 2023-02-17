import React, {ReactNode} from 'react';
import {IonSelect} from "@ionic/react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {TextElem} from "../text-elem";
import selectIcon from "../../assets/svg/chevron-down.svg"
import {Field} from "formik";

interface PropTypes {
  placeholder?: string
  label: string
  icon?: string
  value?:string
  children?:ReactNode
  handleChange:Function
}


const Component = (props: PropTypes) => {

  const {t} = useTranslation()
  return (
        <div>
          <TextElem weight="bold" size={8} tid={props.label ? props.label : ""}/>
          <Select onChange={props.handleChange} value={props.value} as={IonSelect} placeholder={props.placeholder ? t(props.placeholder) : ""}>
            {props.children}
          </Select>
        </div>
  );
};

const Select = styled(Field)`
  color: black;
  background-color: white;
  border-radius: 10px;
  --padding-start: 10px;
  --padding-top: 14px;
  --padding-bottom: 14px;
  font-size: 16px;

  ::part(icon) {
    content: url(${selectIcon});
    opacity: 1;
    width: 18px;
  }
`

export default Component;