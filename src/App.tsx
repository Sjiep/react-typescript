import React from 'react';

let test: string;
test = 'world';

interface Props {
  foo: string
}

export const App: React.FunctionComponent<Props> = () => <div>Hello {test}!</div>;