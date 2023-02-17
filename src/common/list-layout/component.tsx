import React, {ReactNode} from 'react';
import styled from "styled-components";

interface PropTypes {
  children?:ReactNode,
  gap?:number
}

const Component = (props:PropTypes) => {
  return (
    <Wrapper gap = {props.gap}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  max-width: 90%;
  margin: 12px auto;
  gap: ${(props: PropTypes) => props.gap ? props.gap + "rem" : "1rem"};
`

export default Component;