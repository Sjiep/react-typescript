import React, { ReactNode } from 'react';

interface ILemon {
  color?: string,
  children: ReactNode
}

export function Lemon({color = 'yellow', children}: ILemon) {
  return (
    <div style={{backgroundColor: color}}>{children}</div>
  );
}