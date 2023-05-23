import React, {PropsWithChildren} from "react";
import styled from "styled-components";

const CenteredStyle = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;

export const Centered: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <CenteredStyle>
      {children}
    </CenteredStyle>
  )
}
