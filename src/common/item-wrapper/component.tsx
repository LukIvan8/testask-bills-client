import React, {ReactNode} from 'react';
import styled from "styled-components";
import {IonItem} from "@ionic/react";

interface PropTypes {
  slot?:string;
  children:ReactNode;
}

const Component = (props:PropTypes) => {
  return (
    <Item slot={props.slot} lines = "none">
      {props.children}
    </Item>
  );
};

const Item = styled(IonItem)`
  --ion-background-color: none;
  --background:none;
  --padding-start: 5px;
  --ion-safe-area-left: 5px;
`

export default Component;