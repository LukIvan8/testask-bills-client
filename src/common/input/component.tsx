import React from 'react';
import {TextElem} from "../text-elem";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Field} from "formik";

interface PropTypes {
  label?: string,
  placeholder?: string
  name?: string
}



const Component = (props: PropTypes) => {


  const {t} = useTranslation()
  return (
      <div>
        <TextElem weight="bold" tid={props.label ? props.label : ""}/>
        <Field placeholder={props.placeholder ? t(props.placeholder) : ""} name={props.name} as={Input}>
        </Field>
      </div>
  )
};

const Input = styled.input`
  color: black;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 16px;
  width: 100%;
  box-shadow: none;
  border: none;
`

export default Component;