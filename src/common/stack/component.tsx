import {ReactNode} from 'react';
import styled from "styled-components";

interface PropTypes {
  children?: ReactNode;
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}

const Component = (props: PropTypes) => {
  return (
    <Stack gap={props.gap}
           justifyContent={props.justifyContent}
           alignItems={props.alignItems}
           width={props.width}>
      {props.children}
    </Stack>
  );
};

const Stack = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: ${(props: PropTypes) => props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props: PropTypes) => props.alignItems ? props.alignItems : "center"};
  gap: ${(props: PropTypes) => props.gap ? props.gap + "rem" : "0"};
  max-width: ${(props: PropTypes) => props.width ? props.width + "%" : ""};
`

export default Component;