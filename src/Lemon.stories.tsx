import React from 'react';
import { storiesOf } from '@storybook/react';
import { Lemon } from './Lemon';

storiesOf('UI|Widgets/Basics/Button', module)
  .add('with text', () => (
    <Lemon>I'm definitely a lemon</Lemon>
  ))
  .add('Lemon with color', () => (
    <Lemon color='green'>I'm not a lemon</Lemon>
  ));