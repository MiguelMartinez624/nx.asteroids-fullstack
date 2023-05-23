import React, {PropsWithChildren, ReactNode} from "react";
import {Typography} from "../ui";
import styled, {keyframes} from "styled-components";

export interface WithLoadingProps extends PropsWithChildren{
  itsLoading: boolean
}

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const WithLoading: React.FC<WithLoadingProps> = ({children, itsLoading}) => {
  return (
    <>
      {!itsLoading && children}
      {itsLoading && <div><Rotate><Typography text="Please wait a moment ..."/></Rotate></div>}
    </>
  )
}
