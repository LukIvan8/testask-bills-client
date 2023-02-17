import {ReactNode} from 'react';
import styled from "styled-components";

interface PropTypes {
  gap?:number;
  children?:ReactNode
}

const Component = (props:PropTypes) => {
  return (
    <Grid>
      {props.children}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  gap: ${(props:PropTypes) => props.gap ? props.gap : "1rem"};
  width: 90%;
  margin: 0 auto;
`

export default Component;