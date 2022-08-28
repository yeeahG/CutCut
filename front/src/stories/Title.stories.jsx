import React from 'react';
import Title from './Title'

export default {
  title: 'Example/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Title {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
