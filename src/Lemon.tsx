import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LemonButton = styled("button")<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
  padding: 1rem;
  border-radius: 4px;
  border-color: orange;
`


interface ILemon {
  color?: string,
  children: ReactNode
}

export const Lemon: React.FunctionComponent<ILemon> = ({color = 'lemonchiffon', children}) => {
  return (
    <LemonButton bgColor={color}>{children}</LemonButton>
  );
}