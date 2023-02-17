import {ReactNode} from 'react';
import styled from "styled-components";
import {TextElem} from "../text-elem";
import {Field} from "formik";

interface PropTypes {
  label: string
  icon?: string
  children?:ReactNode
  name?:string
  optionList:{ value: string, label: string }[]
  handleChange?: Function
  innerRef?:React.Ref<any>
}


const Component = (props: PropTypes) => {
  return (
        <div>
          <TextElem weight="bold" size={8} tid={props.label ? props.label : ""}/>
          <Field innerRef={props.innerRef} name={props.name} as={Select}>
            <option value=""></option>
            {props.optionList.map(option => {
              return <option key={option.value} value={option.value}>{option.label}</option>;
            })}
          </Field>
        </div>
  );
};

const Select = styled.select`
  border: none;
  color: black;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 16px;
  width:100%;
`

export default Component;