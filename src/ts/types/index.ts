import React from 'react';

// inject className to FComponent
declare module 'react' {
  export type FCX<P = {}> = React.FunctionComponent<P & { className?: string }>
}