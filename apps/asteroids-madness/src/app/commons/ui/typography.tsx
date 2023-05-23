import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 0px;

  .title {
    font-weight: bold;
    font-size: 34px;
  }

`;


export interface TypographyProps {
  text: string;
  type?: 'title' | 'label'
  color: string
}

export const Typography: React.FC<TypographyProps> = ({type = 'label', text, color}) => {
  return (
    <StyledParagraph style={{color: color}}>
      <span className={type}>{text}</span>
    </StyledParagraph>)
}
