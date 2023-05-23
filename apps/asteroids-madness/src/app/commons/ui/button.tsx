import * as React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: none;
  cursor:pointer;
`;

export interface ButtonProps {
  label: string;
  onClick?: () => void
  disabled: boolean
}

export const Button: React.FC<ButtonProps> = ({label, onClick, disabled}) => {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick}>
      {label}
    </ButtonWrapper>
  );
};
