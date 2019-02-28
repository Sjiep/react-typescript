import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const Button = styled("button")`
  color: red;
`

test('it works', () => {
  const tree = renderer.create(<Button />)
  expect(tree).toMatchSnapshot();
});

function sum(a: number, b: number): number {
  return a + b;
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});