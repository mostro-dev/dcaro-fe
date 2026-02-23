import type { Meta, StoryObj } from '@storybook/react';

import { LogoTopBar } from './LogoTopBar';

const meta: Meta<typeof LogoTopBar> = {
  title: 'Layout/LogoTopBar',
  component: LogoTopBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LogoTopBar>;

export const TopBar: Story = {
  args: {
    isLanding: false,
  },
};

export const Landing: Story = {
  args: {
    isLanding: true,
  },
};
