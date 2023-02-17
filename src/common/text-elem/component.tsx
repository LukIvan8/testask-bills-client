import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";


interface propTypes {
  size?: number;
  color?: string,
  tid?: string,
  weight?: string;
  text?: string;
}

const Component = (props: propTypes) => {
  const {t} = useTranslation()
  return (
    <TextStyled weight={props.weight} color={props.color}
                size={props.size}>{props.tid ? t(props.tid) : ""}{props.text}</TextStyled>
  );
};

const TextStyled = styled.p`
  color: ${(props: propTypes) => props.color ? props.color : "black"};
  font-family: Manrope, sans-serif;
  font-size: ${(props: propTypes) => props.size ? props.size * 2 + "px" : "16px"};
  margin: 0;
  font-weight: ${(props: propTypes) => props.weight ? props.weight : "regular"};
`;

export default Component;