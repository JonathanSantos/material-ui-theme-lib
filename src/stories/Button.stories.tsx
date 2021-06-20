import { Button } from '@material-ui/core';
import React from 'react';
import { MamakiThemeProvider } from '../theme';

export default {
  title: '@material-ui/Button',
  component: Button,
};

const Template = (args) => <MamakiThemeProvider><Button {...args} /></MamakiThemeProvider>;

export const Default = Template.bind({});
Default.args = { children: 'Sou um botão' };

export const Contained = Template.bind({});
Contained.args = { variant: 'contained', children: 'Sou um botão' };
