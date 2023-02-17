import React, {ReactNode} from 'react';
import {IonCard} from "@ionic/react";
import styled from "styled-components";

interface PropTypes {
  children?:ReactNode;

}

const Component = (props:PropTypes) => {
  return (
    <Card>
      {props.children}
    </Card>
  );
};

const Card = styled(IonCard)`
  background-color: white;
  padding: 14px;
  margin: 0;
`


export default Component;