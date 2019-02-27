/*
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { JssProvider } from '../src/JssProvider';
import { theme_ombplus } from '../src/utils/theme/theme_ombplus';
import { MathJaxProvider } from '../src/components/Math/MathJaxProvider';
import { BaseStyle } from '../src/BaseStyle';

const Providers = storyFn => (
  <JssProvider>
    <ThemeProvider theme={theme_ombplus}>
      <MathJaxProvider>
        <Normalize />
        <BaseStyle />
        {storyFn()}
      </MathJaxProvider>
    </ThemeProvider>
  </JssProvider>
);

const req = require.context('../src/components', true, /\.stories\.js$/);


addDecorator(withInfo);
addDecorator(Providers);
*/

import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
