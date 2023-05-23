import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 0px;
  color: ${props => props.$primary ? "white" : "palevioletred"};
`;


export interface TypographyProps {
  text: string;
  type?: 'title' | 'label'

}

export const Typography: React.FC<TypographyProps> = ({type = 'label', text}) => {
  return (
    <StyledParagraph $color>
      {text}
    </StyledParagraph>)
}
